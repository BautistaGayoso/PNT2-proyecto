import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { TarjetaPiloto } from "./TarjetaPiloto";
import {useAuth} from "../context/AuthContext"
// import { imagenesPilotos } from "../../image/imagenesPilotos";

export const ListaPiloto = () => {
    const [pilotos, setPilotos] = useState([]);
    const {user} = useAuth()

    const llamarApi = async () => {
    try {
        const response = await fetch("http://192.168.0.22:3000/app/drivers/drivers");

    const datosPiloto = await response.json();
    setPilotos(datosPiloto);

    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    llamarApi();
  }, []);


  const buscarTeam = async() => {
    const response = await fetch(`http://192.168.0.22:3000/app/team/${user.id}`)
    const data = await response.json()
    return data.team
  }


  const agregarPiloto = async(driverId) => {

    const team = await buscarTeam()
    console.log("driverId:", driverId)

    if(
      team.pilot1Id === driverId ||
      team.pilot2Id === driverId
    )
    {
      console.log("piloto ya agregado")
      return
    }

    if(team.pilot1Id === null){
      await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            pilot1Id: driverId
          })
        }
      )
      return
    }
    if(team.pilot2Id === null){
      await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            pilot2Id: driverId
          })
        }
      )
      return
    }
  console.log("Equipo completo");

  }



  // const eliminarPiloto = async (driverId) => {

  //   const team = await buscarTeam()

  //   if(team.pilot1Id === driverId){
  //     await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           pilot1Id: null
  //         })
  //       }
  //     )
  //     return
  //   }
  //   if(team.pilot2Id === driverId){
  //     await fetch(`http://192.168.0.22:3000/app/team/${user.id}`, 
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           pilot2Id: null
  //         })
  //       }
  //     )
  //     return
  //   }
  //   console.log("piloto no encontrado en el equipo")
  // }

  
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        {pilotos.map((piloto) => (
          <TarjetaPiloto
            key={piloto.driverId}
            piloto={piloto}
            agregarPiloto={agregarPiloto}
            // eliminarPiloto={eliminarPiloto}
            // imagen={imagenesPilotos[piloto.driverId]}
            
          />
          
        ))}
      </View>
    </ScrollView>
  );
};