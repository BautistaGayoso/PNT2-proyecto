import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function TarjetaPilotoEquipo({piloto,eliminarPiloto}){

    return(
<View style={styles.card}>
    <Text style={styles.titulo}>Piloto</Text>

    <Text style={styles.nombre}>
        {piloto.givenName}
    </Text>

    <Text style={styles.apellido}>
        {piloto.familyName}
    </Text>

    <Text style={styles.info}>
        Nacionalidad: {piloto.nationality}
    </Text>

    <Text style={styles.info}>
        Puntos: {piloto.points}
    </Text>

    <Text style={styles.info}>
        Precio: ${piloto.price}
    </Text>

    <TouchableOpacity
        style={styles.botonEliminar}
        onPress={() => eliminarPiloto(piloto.id)}
    >
        <Text style={styles.textoBoton}>
            Quitar piloto
        </Text>
    </TouchableOpacity>
</View>
    )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#15151E",
    borderWidth: 2,
    borderColor: "#E10600",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: 350,
    alignItems: "center",
  },

  titulo: {
    color: "#E10600",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  nombre: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  apellido: {
    color: "#DDD",
    fontSize: 18,
    marginBottom: 15,
  },

  info: {
    color: "white",
    fontSize: 14,
    marginVertical: 2,
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
  },
});
