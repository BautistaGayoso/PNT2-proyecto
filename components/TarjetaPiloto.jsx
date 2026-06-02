import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export const TarjetaPiloto = ({ piloto }) => {

  return (
    <View style={styles.card}>
      <Text style={styles.id}>
        Piloto ID: {piloto.driverId}
      </Text>

      <Text style={styles.nombre}>
        {piloto.givenName} {piloto.familyName}
      </Text>

      {/* <Image
        source={{ uri: imagen }}
        style={styles.imagen}
      /> */}

      <Text style={styles.tituloInfo}>
        Información del piloto
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          <Text style={styles.bold}>Número:</Text> #
          {piloto.permanentNumber}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.bold}>Código:</Text>{" "}
          {piloto.code}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.bold}>Nacionalidad:</Text>{" "}
          {piloto.nationality}
        </Text>
      </View>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.botonAgregar}>
          <Text style={styles.textoBoton}>
            Agregar a equipo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonQuitar}>
          <Text style={styles.textoBoton}>
            Quitar del equipo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#15151E",
    borderWidth: 2,
    borderColor: "#E10600",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
  },

  id: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#AAA",
    alignSelf: "flex-start",
  },

  nombre: {
    fontSize: 26,
    color: "#E10600",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#E10600",
    marginVertical: 10,
    paddingBottom: 5,
    fontWeight: "bold",
  },

  imagen: {
    width: 150,
    height: 150,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
  },

  tituloInfo: {
    fontSize: 16,
    color: "#E10600",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontWeight: "bold",
  },

  infoBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#444",
    width: "100%",
  },

  info: {
    color: "white",
    marginVertical: 4,
    fontSize: 14,
  },

  bold: {
    fontWeight: "bold",
  },

  botones: {
    flexDirection: "row",
    gap: 10,
    marginTop: 18,
  },

  botonAgregar: {
    backgroundColor: "#16a34a",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  botonQuitar: {
    backgroundColor: "#dc2626",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});
