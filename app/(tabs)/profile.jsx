import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function profile() {
  return (
        <View style={styles.container}>
            <View style={styles.cardPerfil}>
                <View style={styles.avatar}/>
            
                <Text style={styles.nombre}>Nombre: </Text>
        
                <Text style = {styles.email}>Email</Text>

                <TouchableOpacity style = {styles.botonLogout}>
                    <Text style = {styles.botonTexto}>cerrar sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#3b3838",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
},

cardPerfil: {
    backgroundColor: "#15151E",
    borderWidth: 2,
    borderColor: "#E10600",
    borderRadius: 15,
    padding: 100,
    width: "100%",
    alignItems: "center",
},

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#E10600",
    marginBottom: 15,
  },

  nombre: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },

  email: {
    color: "#AAAAAA",
    fontSize: 15,
    marginBottom: 20,
  },

  separador: {
    width: "100%",
    height: 2,
    backgroundColor: "#E10600",
    marginVertical: 15,
  },

  tituloSeccion: {
    color: "#E10600",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  infoContainer: {
    width: "100%",
  },

  infoItem: {
    backgroundColor: "#1F1F2A",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  infoLabel: {
    color: "#AAAAAA",
    fontSize: 12,
  },

  infoValor: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  botonEditar: {
    backgroundColor: "#E10600",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },

  botonTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonLogout: {
  backgroundColor: "#2A2A2A",
  borderWidth: 2,
  borderColor: "#E10600",
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10,
  marginTop: 12,
  width: "100%",
  alignItems: "center",
},

textoLogout: {
  color: "#E10600",
  fontWeight: "bold",
  fontSize: 16,
  textTransform: "uppercase",
},
});