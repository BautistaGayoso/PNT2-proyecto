import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import * as ImagePicker from 'expo-image-picker'

export default function profile() {

    const{user, logout, cambiarProfilePic, confirmarEliminarCuenta} = useAuth()

    const cambiarImagen =  () => {
      Alert.alert("Cambiar imagen", "elegi de donde queres subir la foto",
        [{
        text: "Camara",
        onPress: abrirCamara 
        },{
          text: "galeria",
          onPress: abrirGaleria

        },{
        text: "cancelar"

      }])
    }

    const abrirCamara = async() => {

      const {status} = await ImagePicker.requestCameraPermissionsAsync()
      if(status !== "granted"){
        Alert.alert("permiso denegado", "Necesitamos permisos para usar la camara")
      }

      const resultado = await ImagePicker.launchCameraAsync()

      if(!resultado.canceled){
        cambiarProfilePic(resultado.assets[0].uri)
      }

    }
    const abrirGaleria = async() => {

      const {status} = await ImagePicker.getMediaLibraryPermissionsAsync()
            if(status !== "granted"){
        Alert.alert("permiso denegado", "Necesitamos permisos para usar la galeria")
      }

      const resultado = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      })

      if(!resultado.canceled){
      cambiarProfilePic(resultado.assets[0].uri)
    }

    }

    if(!user) return null
  return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Mi perfil</Text>  
          <Text style={styles.subtitulo}>Información de usuario</Text>

          <View style={styles.linea} />

            <View style={styles.cardPerfil}>
              <View style= {styles.avatarWrapper}>
                <Image source={{uri: user.profile_pic}} style={styles.avatar}/>
                <TouchableOpacity style={styles.botonEditar} onPress={cambiarImagen}>
                  <Text style={styles.botonTexto}>Editar foto</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.nombre}> {user.name}</Text>
                <Text style = {styles.email}>Email: {user.mail}</Text>
                <TouchableOpacity style = {styles.botonLogout} onPress={() => logout()}>
                    <Text style = {styles.botonTexto}>cerrar sesion</Text>
                </TouchableOpacity>
            </View>
          <TouchableOpacity style = {styles.botonEliminarCuenta} onPress={() => confirmarEliminarCuenta()}>
            <Text style = {styles.textoEliminarCuenta}>Eliminar cuenta</Text>
          </TouchableOpacity>
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
  marginBottom: 20,
  borderRadius: 10,
},

cardPerfil: {
  backgroundColor: "#15151E",
  borderWidth: 2,
  borderColor: "#E10600",
  borderRadius: 12,
  padding: 20,
  width: "90%",
  alignSelf: "center",
  alignItems: "center",
  marginTop: 10,
},

avatar: {
  width: 120,
  height: 120,
  borderRadius: 60,
  borderWidth: 3,
  borderColor: "#E10600",
  marginBottom: 10,
},
avatarWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
},

  nombre: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },

email: {
  color: "#AAAAAA",
  fontSize: 15,
  marginBottom: 25,
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
  backgroundColor: "#2563EB",
  paddingVertical: 12,
  paddingHorizontal: 35,
  borderRadius: 10,
  marginTop: 5,
  marginBottom: 20,
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
  marginTop: 15,
  width: "100%",
  alignItems: "center",
},

textoLogout: {
  color: "#E10600",
  fontWeight: "bold",
  fontSize: 16,
  textTransform: "uppercase",
},
botonEliminarCuenta: {
  backgroundColor: "#7F1D1D",
  borderWidth: 2,
  borderColor: "#DC2626",
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10,
  marginTop: 12,
  width: "100%",
  alignItems: "center",
},

textoEliminarCuenta: {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: 16,
  textTransform: "uppercase",
},
});