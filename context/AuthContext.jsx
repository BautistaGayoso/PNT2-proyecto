import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {

        const cargarSesion = async () => {
            const storage = await AsyncStorage.getItem("user")
            if(storage){
                setUser(JSON.parse(storage))
                
            }
            setLoading(false)

            console.log("storage: ", storage);
            
        }

        cargarSesion()

    }, [])
    

    const login = async (mail, pass) => {
        // primera validacion 
    if(!mail || !pass){
        setError("faltan datos")
        return
        }

        const response = await fetch("http://192.168.0.22:3000/app/users/login", 
            {
            method: "POST",
            // le avisa al backend que el body es json
            headers: {
                "Content-Type": "application/json"
                },
            // datos enviados al backend convirtiendolos a json 
            body: JSON.stringify({
            mail,
            pass
                })
            })
            const data = await response.json()

            console.log("data", data);
            
            
            //segunda validacion, el usuario no esta logeado
        if(!data.success){
            setError(data.message)
            return
        }

        // para mantener la persistencia del login del usuario hasta que quiera desloguearse
        try {
            await AsyncStorage.setItem("user", JSON.stringify(data.user))
            
        } catch (error) {
            console.log("error ", error);
            
        }

        //seteamos los datos que devuelve el response.json
        setUser(data.user)
        
        setError('')
        //dirigimos al usuario a la vista del home
        router.replace("/(tabs)/home")
    }

    const register = async (email, password, usuario) => {

        if(!email || !password || !usuario){
            setError("faltan datos")
        return
        }

        const response = await fetch("http://192.168.0.22:3000/app/users/register", 
            {
            method: "POST",
            // le avisa al backend que el body es json
            headers: {
                "Content-Type": "application/json"
                },
            // datos enviados al backend convirtiendolos a json 
            body: JSON.stringify({
            mail: email,
            pass: password,
            name: usuario
                })
            })
        const data = await response.json()

        console.log("data", data);

        try {
            await AsyncStorage.setItem("user", JSON.stringify(data.user))
            
        } catch (error) {
            console.log("error ", error);
            
        }

        //seteamos los datos que devuelve el response.json
        setUser(data.user)
        
        setError('')
        //dirigimos al usuario a la vista del home
        router.replace("/(tabs)/home")

    }

    const cambiarProfilePic = async (uri) => {

        const userModificado = {...user, profile_pic: uri}

        await AsyncStorage.setItem("user",JSON.stringify(userModificado))
        setUser(userModificado)

            const response = await fetch(`http://192.168.0.22:3000/app/users/${user.id}`, 
            {
            method: "PUT",
            // le avisa al backend que el body es json
            headers: {
                "Content-Type": "application/json"
                },
            // datos enviados al backend convirtiendolos a json 
            body: JSON.stringify({
                profile_pic: uri
                })
            })
        
    }

    const logout = () => {
        setUser(null)
        AsyncStorage.removeItem("user")
        router.replace("/(auth)/login")
    }


    return(
        <AuthContext.Provider value={{user, login, register, logout, error, loading, cambiarProfilePic}}>
            {children}
        </AuthContext.Provider>
    )
}
