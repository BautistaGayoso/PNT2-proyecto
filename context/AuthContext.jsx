import { useRouter } from "expo-router";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


    // const MOCK_USER =[{
    //     id: 1,
    //     name: 'bauti',
    //     email: 'bautigayoso2001@gmail.com',
    //     password: '123'
    // }]

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

    const login = async (mail, pass) => {
    if(!mail || !pass){
        setError("faltan datos")
        return
        }


        const response = await fetch("http://192.168.0.22:3000/app/users")
        const dataUser = await response.json()


        const busqueda = dataUser.message.find((usuario) => {
            return usuario.mail === mail && usuario.pass === pass
        })


        if (!busqueda){
            setError("usuario o password incorrecto")
            return   
        }

        setUser(busqueda)
        setError('')
        
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
