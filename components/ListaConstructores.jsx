import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { TarjetaConstructor } from "./TarjetaConstructores";
import { useAuth } from "../context/AuthContext";
import { router } from "expo-router";

export const ListaConstructores = () => {

const [constructores, setConstructores] = useState([]);

const { user } = useAuth();

const llamarApiConstructores = async () => {

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
    llamarApiConstructores();
}, []);

const buscarTeam = async () => {

    const response = await fetch(
    `http://192.168.0.22:3000/app/team/${user.id}`)

    const data = await response.json();

    return data.team;
}

const agregarConstructor = async (constructorId) => {

    console.log("constructorId:", constructorId);

    const team = await buscarTeam();

    if(team.constructorId === constructorId){
    console.log("constructor ya agregado");
    return;
    }

    const response = await fetch(`http://192.168.0.22:3000/app/team/${user.id}`,
    {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        constructorId: constructorId
        })
    }
    )
    router.back()
    return
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
            // eliminarConstructor={eliminarConstructor}
        />

        ))}

    </View>
    </ScrollView>
);
};