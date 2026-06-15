import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,} from "react-native";

export const TarjetaConstructor = ({constructor,agregarConstructor}) => {

  
  
  return (
    <View style={styles.card}>

      <Text style={styles.nombre}>
        {constructor.name}
      </Text>

      <Text style={styles.tituloInfo}>
        Información del constructor
      </Text>

      <View style={styles.infoBox}>

        <Text style={styles.info}>
          <Text style={styles.bold}>
            Nacionalidad:
          </Text>{" "}
          {constructor.nationality}
        </Text>

      </View>

      <View style={styles.botones}>

        <TouchableOpacity
          style={styles.botonAgregar}
          onPress={() => agregarConstructor(constructor.id)}
        >
          <Text style={styles.textoBoton}>
            Agregar al equipo
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.botonQuitar}
          onPress={() => eliminarConstructor(constructor.id)}
        >
          <Text style={styles.textoBoton}>
            Quitar del equipo
          </Text>
        </TouchableOpacity> */}

      </View>
    </View>
  );
};

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

  tituloInfo: {
    fontSize: 16,
    color: "#FFD700",
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
    minHeight: 110,
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