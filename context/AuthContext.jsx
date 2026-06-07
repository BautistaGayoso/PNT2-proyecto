import { createContext, useState } from "react";

const AuthContext = createContext()


export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [error, setError] = useState(null)

    const login = (email, password) => {
    if(!email || !password){
        console.log("faltan datos");
        setError("faltan datos")
        return
        }
    }

    const logout = () => {

    }


    return(
        <AuthContext.Provider value={user, login, logout}>
            {children}
        </AuthContext.Provider>
    )
}