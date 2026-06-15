import { StyleSheet, Text, View } from "react-native";
import { ListaConstructores } from "../components/ListaConstructores";

export default function SeleccionConstructor() {

    return(
<View style={styles.container}>
    <Text style={styles.titulo}>
        Seleccionar constructor
    </Text>

    <ListaConstructores />
</View>
    ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333030",
    alignItems: "center",
    paddingTop: 60,
  },

  titulo: {
    color: "#E10600",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 20,
  },

  contenido: {
    width: "100%",
    alignItems: "center",
  },
});