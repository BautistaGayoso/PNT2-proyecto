import { Stack, Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout (){
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{title: "Inicio", tabBarIcon: ({color,size}) => (
            <AntDesign name="home" size={size} color={color} />
        )}}/>
          <Tabs.Screen name="team" options={{title: "Equipo", tabBarIcon: ({color,size}) => (
              <AntDesign name="star" size={24} color={color} />
          )}}/>
        <Tabs.Screen name="profile" options={{title: "Perfil", tabBarIcon: ({color,size}) => (
          <Feather name="user" size={24} color={color} />
        )}}/>
    </Tabs>
  )
}