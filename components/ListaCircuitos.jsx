import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import {TarjetaCircuito} from "./TarjetaCircuitos"


export const ListaCircuitos = () => {

     const[circuitos, setCircuitos] = useState([])


    const llamarApiCircuitos = async () => {

        try{
            const response = await fetch("https://api.jolpi.ca/ergast/f1/2026/?format=json")
            const datosCircuitos = await response.json()
            setCircuitos(datosCircuitos.MRData.RaceTable.Races)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        llamarApiCircuitos()
    }, [])



    return(
        <ScrollView contentContainerStyle={{alignItems: "center",paddingBottom: 20}}>   
            <View>
                {
                    circuitos.map((circuito) => (
                        <TarjetaCircuito
                        key={circuito.round}
                        circuito={circuito}
                        />
                    )
                    )
                }
            </View>
        </ScrollView>
    )
}