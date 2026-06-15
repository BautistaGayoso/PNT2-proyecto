import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListaCircuitos } from '../../components/ListaCircuitos';
// import { useAuth } from '../../context/AuthContext';


export default function home(){
    // const {user} = useAuth()


  return (
    <View style = {styles.container}>
        <Text style = {styles.titulo}>Calendario F1 </Text>
        <Text style={styles.subtitulo}>Temporada 2026</Text>
        <View style={styles.linea}/>
        <ListaCircuitos/>
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
linea: {
  height: 3,
  backgroundColor: "#E10600",
  width: "90%",
  alignSelf: "center",
  marginBottom: 15,
  borderRadius: 10,
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
