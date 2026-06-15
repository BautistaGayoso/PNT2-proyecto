import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import  {ListaPiloto}  from '../../components/ListaPilotos'
import  TarjetaPilotoEquipo  from '../../components/TarjetaPilotoEquipo'
import  TarjetaConstructorEquipo  from '../../components/TarjetaConstructorEquipo'

import { router } from 'expo-router';


export default function team(){
    const { user } = useAuth()

    const [team, setTeam] = useState(null)

    const buscarTeam = async () => {

    if(!user) return
    const response = await fetch(`http://192.168.0.22:3000/app/team/${user.id}`)
    const data = await response.json()

    setTeam(data.team)
}

//Se ejecuta cada vez que la pantalla recibe el foco.
useFocusEffect(
    useCallback(() => {
        if(user){
            buscarTeam()
        }
    }, [])
)


const eliminarPiloto = async (driverId) => {

    if(team.pilot1Id === driverId){
    await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
        {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pilot1Id: null
        })
        }
    )
    await buscarTeam()
    return
    }
    if(team.pilot2Id === driverId){
    await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
        {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pilot2Id: null
        })
        }
    )
    await buscarTeam()
    return
    }
    console.log("piloto no encontrado en el equipo")
}

const eliminarConstructor = async (constructorId) => {

    
    if(team.constructorId === constructorId){

    await fetch(
        `http://192.168.0.22:3000/app/team/${user.id}`,
        {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            constructorId: null
        })
        }
    )
    await buscarTeam()
    return
    }

    console.log("constructor no encontrado");
}

const elegirPiloto = () => {
    router.push("/seleccionPiloto")
}

const elegirConstructor = () => {
    router.push("/seleccionConstructor")
}



return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Tu equipo</Text>
        <Text style={styles.subtitulo}>Gestiona tus pilotos y constructor</Text>
        
        <View style={styles.botonesContainer}>
            <TouchableOpacity style={styles.botonPiloto} onPress={elegirPiloto}>
                <Text style={styles.textoBoton}>Pilotos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonConstructor} onPress={elegirConstructor}>
                <Text style={styles.textoBoton}>Constructor</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems: "center",paddingBottom: 20}}>
        {team?.pilot1 && (
            <TarjetaPilotoEquipo
                piloto={team.pilot1}
                eliminarPiloto={eliminarPiloto}
            />
        )}

        {team?.pilot2 && (
            <TarjetaPilotoEquipo
                piloto={team.pilot2}
                eliminarPiloto={eliminarPiloto}
            />
        )}
        {team?.equipo &&(
            <TarjetaConstructorEquipo 
                equipo={team.equipo}
                eliminarConstructor={eliminarConstructor}
            />
        )}
        </ScrollView>
    </View>
)
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#1A1A1A",
  paddingTop: 30,
},

titulo: {
  color: "#FFFFFF",
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 5,
  marginLeft: 20,
},

subtitulo: {
  color: "#AAAAAA",
  fontSize: 16,
  marginLeft: 20,
  marginBottom: 20,
},

input: {
    width: "90%",
    height: 55,
    borderWidth: 2,
    borderColor: "#E10600",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    marginBottom: 18,
    fontSize: 16,
},

// button: {
//     backgroundColor: "#E10600",
//     borderRadius: 12,
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     marginTop: 25,
//     width: "65%",
//     paddingVertical: 10,
// },
textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
},
    ErrorText: {
    color: "#FFFFFF",
    fontWeight: "",
    fontSize: 18,
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginLeft: "7%",
},
botonSeleccionar: {
    backgroundColor: "#E10600",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    width: "65%",
    alignItems: "center",
},

textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
},
botonesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    paddingHorizontal: 15,
},

botonPiloto: {
    backgroundColor: "#2563EB", // azul
    borderRadius: 10,
    paddingVertical: 12,
    width: "45%",
    alignItems: "center",
},

botonConstructor: {
    backgroundColor: "#F59E0B", // naranja/dorado
    borderRadius: 10,
    paddingVertical: 12,
    width: "45%",
    alignItems: "center",
},

textoBoton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
},
});