import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { TarjetaConstructor } from "./TarjetaConstructores";
import { useAuth } from "../context/AuthContext";

export const ListaConstructores = () => {

const [constructores, setConstructores] = useState([]);

const { user } = useAuth();

const llamarApi = async () => {

    try {

    const response = await fetch(
        "http://192.168.0.22:3000/app/constructors/"
    );

    const data = await response.json();

    setConstructores(data);

    } catch (error) {
    console.log(error);
    }
};

useEffect(() => {
    llamarApi();
}, []);

const buscarTeam = async () => {

    const response = await fetch(
    `http://192.168.0.22:3000/app/team/${user.id}`)

    const data = await response.json();

    return data.team;
}

const agregarConstructor = async (constructorId) => {

    const team = await buscarTeam();

    if(team.constructorId === constructorId){
    console.log("constructor ya agregado");
    return;
    }

    await fetch(
    `http://192.168.0.22:3000/app/team/${user.id}`,
    {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        constructorId
        })
    }
    )
}

const eliminarConstructor = async (constructorId) => {

    const team = await buscarTeam();

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
    );

    return;
    }

    console.log("constructor no encontrado");
}

return (
    <ScrollView>
    <View
        style={{
        alignItems: "center",
        paddingVertical: 20,
        }}
    >

        {constructores.map((constructor) => (

        <TarjetaConstructor
            key={constructor.constructorId}
            constructor={constructor}
            agregarConstructor={agregarConstructor}
            eliminarConstructor={eliminarConstructor}
        />

        ))}

    </View>
    </ScrollView>
);
};