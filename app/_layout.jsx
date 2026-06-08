import { router, Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'

function RootLayoutNav(){

    const {user} =useAuth()
    const router = useRouter()


    useEffect(() => {

        if(!user){
            // router.replace("/login")
        }else if(user){
            router.replace("/(tabs)/home")
        }
    },[user])

  return (
    <AuthProvider>
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="login"/>
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
