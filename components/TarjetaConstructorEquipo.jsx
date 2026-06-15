import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function TarjetaConstructorEquipo({equipo, eliminarConstructor}) {

   
    return(
        <View style={styles.card}>
    <Text style={styles.titulo}>
        Constructor
    </Text>

    <Text style={styles.nombre}>
        {equipo.name}
    </Text>

    <Text style={styles.info}>
        Nacionalidad: {equipo.nationality}
    </Text>

    <Text style={styles.info}>
        Puntos: {equipo.points}
    </Text>

    <Text style={styles.info}>
        Precio: ${equipo.price}
    </Text>

    <TouchableOpacity
        style={styles.botonEliminar}
        onPress={() => eliminarConstructor(equipo.id)}
    >
        <Text style={styles.textoBoton}>
            Quitar constructor
        </Text>
    </TouchableOpacity>
</View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#15151E",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: 350,
    alignItems: "center",
  },

  titulo: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },

  nombre: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
    paddingBottom: 10,
    marginBottom: 15,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#444",
  },

  info: {
    color: "white",
    fontSize: 14,
    marginVertical: 4,
  },

  botonEliminar: {
    backgroundColor: "#dc2626",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});