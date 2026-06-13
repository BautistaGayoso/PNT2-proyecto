import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'

export default function App() {

  const [email, setEmail] = useState('')
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const [esRegister, setEsRegister] = useState(false)
  const toggleSwitch = () => setEsRegister(previousState => !previousState)
  

  const {user, login, error,loading, register} = useAuth()

    if(loading){

      return(
        <ActivityIndicator size="large" color="#a10000" />
      )
    }

    const hanldeButton = () => {
      
      if(esRegister){
        register(email, password, usuario)
      }else{
        login(email,password)
      }
    }

  return (
    <View style={styles.container}>

      <Text style= {styles.titulo}>Gran F1</Text>

      <TextInput style={styles.input}
      placeholder='Email'
      placeholderTextColor={"#888"}
      value={email}
      onChangeText={setEmail}
      />

      {
        esRegister && (
      <TextInput style={styles.input}
      placeholder='Usuario'
      placeholderTextColor={"#888"}
      keyboardType='Usuario'
      value={usuario}
      onChangeText={setUsuario}
      />
        )
      }

      
      <TextInput style={styles.input}
      placeholder='Password'
      placeholderTextColor={"#888"}
      value={password}
      onChangeText={setPassword}
      />
      {
        error && (
          <Text style= {styles.ErrorText}>{error}</Text>
        )
      }

      <TouchableOpacity style = {styles.button} onPress={hanldeButton}>
        <Text styles={styles.buttonText}>{esRegister ? "REGISTRARSE" : "INICIAR SESION"}</Text>
      </TouchableOpacity>
      
      <Switch value = {esRegister} onValueChange={toggleSwitch}/>
      
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
