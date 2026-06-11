import { useRouter } from "expo-router";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

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

        //seteamos los datos que devuelve el response.json
        setUser(data.user)
        setError('')
        //dirigimos al usuario a la vista del home
        router.replace("(tabs)/home")
        
    }

    const logout = () => {
        setUser(null)
    }


    return(
        <AuthContext.Provider value={{user, login, logout, error}}>
            {children}
        </AuthContext.Provider>
    )
}
