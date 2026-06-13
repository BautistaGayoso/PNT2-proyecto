import { router, Stack, useRouter, useSegments } from 'expo-router'
import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'

function RootLayoutNav(){

    const {user, loading} =useAuth()
    const router = useRouter()
    const segments = useSegments()

    useEffect(() => {

        if(loading) return

        const estaEnAuth = segments[0] === "(auth)"
        
        if(!user && !estaEnAuth){
            router.replace("/(auth)/login")

        }else if(user && estaEnAuth){
            router.replace("/(tabs)/home")
        }


    },[user, segments, loading])

return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
    </Stack>
)
}

export default function Rootlayout(){
    return(
        <AuthProvider>
            <RootLayoutNav/>
        </AuthProvider>
    )
}
