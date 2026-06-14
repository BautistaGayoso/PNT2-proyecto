import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import  {ListaPiloto}  from '../../components/ListaPilotos'
import  TarjetaEquipo  from '../../components/TarjetaEquipo'


export default function team(){
    const { user } = useAuth()

    const [team, setTeam] = useState(null)

    const buscarTeam = async () => {
    const response = await fetch(`http://192.168.0.22:3000/app/team/${user.id}`)
    const data = await response.json()
            console.log(data)


    setTeam(data.team)
}

//Se ejecuta cada vez que la pantalla recibe el foco.
useFocusEffect(
    useCallback(() => {
        buscarTeam()
    }, [])
)


const eliminarPiloto = async (driverId) => {

    
    console.log("TEAM", team);
    

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

return(
    <View style={styles.container}>
        <Text style={styles.titulo}>
            Tu equipo:
        </Text>
<ScrollView
    contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 20
    }}
>
    {team?.pilot1 && (
        <TarjetaEquipo
            piloto={team.pilot1}
            eliminarPiloto={eliminarPiloto}
        />
    )}

    {team?.pilot2 && (
        <TarjetaEquipo
            piloto={team.pilot2}
            eliminarPiloto={eliminarPiloto}
        />
    )}
</ScrollView>
    </View>
)
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#333030",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
},

titulo: {
    color: "#E10600",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    textTransform: "",
    letterSpacing: 2,
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

button: {
    backgroundColor: "#E10600",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 25,
    width: "90%",
    alignItems: "center",
},

buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
},
    ErrorText: {
    color: "#FFFFFF",
    fontWeight: "",
    fontSize: 18,
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginLeft: "7%",
}
});