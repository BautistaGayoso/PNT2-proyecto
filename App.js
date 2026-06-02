import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Boton } from './components/Boton';
import { TarjetaPiloto } from './components/TarjetaPiloto';
import { ListaPiloto } from './components/ListaPilotos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.titulo}>Clase</Text>
      {/* <Boton/> */}
      {/* <TarjetaPiloto/> */}
      <ListaPiloto/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "#4c1010",
    fontSize: 50,
    fontWeight: "bold",
  }
});
