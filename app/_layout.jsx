import { router, Stack, useRouter, useSegments } from 'expo-router'
import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'

function RootLayoutNav(){

    const {user} =useAuth()
    const router = useRouter()
    const segments = useSegments()

    useEffect(() => {

        const estaEnAuth = segments[0] === "(auth)"

        // if(!user && !estaEnAuth){
        //     router.replace("/(auth)/login")
        // }else if(user && estaEnAuth){
        //     router.replace("/(tabs)/home")
        // }
    },[user, segments])

  return (
    <AuthProvider>
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
    </Stack>
    </AuthProvider>
  )
}

export default function Rootlayout(){
    return(
        <AuthProvider>
            <RootLayoutNav/>
        </AuthProvider>
    )
}
