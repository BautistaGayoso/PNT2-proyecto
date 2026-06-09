import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { TarjetaPiloto } from "./TarjetaPiloto";
// import { imagenesPilotos } from "../../image/imagenesPilotos";

export const ListaPiloto = () => {
    const [pilotos, setPilotos] = useState([]);

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
            // imagen={imagenesPilotos[piloto.driverId]}
          />
        ))}
      </View>
    </ScrollView>
  );
};