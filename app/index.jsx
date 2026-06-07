import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function App() {

    const router = useRouter()

    const irALogin = () => {
        router.replace("/login")
    }

    const irAHome = () => {
        router.push("(tabs)/home")
    }
    

  return (
    <View style={styles.container}>

      <Text style= {styles.titulo}>Ir a login</Text>

      <TouchableOpacity style = {styles.button} onPress={irALogin}>
        <Text styles={styles.buttonText}>login</Text>
      </TouchableOpacity>

      <Text style= {styles.titulo}>Ir a home</Text>

    <TouchableOpacity style = {styles.button} onPress={irAHome}>
        <Text styles={styles.buttonText}>home</Text>
      </TouchableOpacity>

      {/* <ListaPiloto/> */}
      
    </View>
  );
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
