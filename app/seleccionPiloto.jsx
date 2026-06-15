import { StyleSheet, Text, View } from "react-native";
import { ListaPiloto } from "../components/ListaPilotos";

export default function seleccionPiloto() {

    return(
<View style={styles.container}>
    <Text style={styles.titulo}>
        Seleccionar piloto
    </Text>

    <ListaPiloto />
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