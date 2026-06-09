import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const {user, login, error} = useAuth()

  return (
    <View style={styles.container}>

      <Text style= {styles.titulo}>Gran F1</Text>

      <TextInput style={styles.input}
      placeholder='Email'
      placeholderTextColor={"#888"}
      keyboardType='email-address'
      value={email}
      onChangeText={setEmail}
      />
      
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

      <TouchableOpacity style = {styles.button} onPress={() => login(email, password)}>
        <Text styles={styles.buttonText}>INICIAR SESION</Text>
      </TouchableOpacity>

      
      
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
