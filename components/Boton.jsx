import React from 'react'
import { View, Button, TouchableOpacity, Text } from 'react-native'
import { StyleSheet } from 'react-native';


export const Boton = () => {

    const handlePress = (parametro) => {
        console.log(`apretando: ${parametro}`);
        
    }

    return (
        <View>
            <Button title='Elegir' onPress={() => handlePress("button")} color={"red"}/>
            <TouchableOpacity onPress={()=>handlePress("touchable")} style={styles.button}>
                <Text style={styles.buttonText}>confirmar</Text>
            </TouchableOpacity>
        </View>
)
}

const styles = StyleSheet.create({

    button:{
        backgroundColor: "#821212",
        borderRadius: 8,
        paddingVertical:10 ,
        paddingHorizontal:30,
        marginTop: 30

    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    }
}
)
