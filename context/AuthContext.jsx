import { useRouter } from "expo-router";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


    const MOCK_USER =[{
        id: 1,
        name: 'bauti',
        email: 'bautigayoso2001@gmail.com',
        password: '123'
    }]

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

    const login = (email, password) => {
    if(!email || !password){
        setError("faltan datos")
        return
        }

        const busqueda = MOCK_USER.find((usuario) => {
            return usuario.email === email && usuario.password === password
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
