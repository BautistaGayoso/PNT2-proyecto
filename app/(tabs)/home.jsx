import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function home(){
  return (
    <View stytle = {styles.container}>
        <Text style = {styles.titulo}>Hola</Text>
        <Text style = {styles.titulo}> Bienvenido al home</Text>

        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>Ver detalle</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333030",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
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
