import { StyleSheet, Text, View } from "react-native";

export const TarjetaCircuito = ({ circuito }) => {

    const fecha = new Date(circuito.date);

    const fechaFormateada = fecha.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    
    return (
        <View style={styles.card}>

            <Text style={styles.granPremio}>
                {circuito.raceName}
            </Text>

            <View style={styles.infoBox}>

            <Text style={styles.info}>
                🏁 {circuito.Circuit.circuitName}
            </Text>

            <Text style={styles.info}>
                🌎 {circuito.Circuit.Location.country}
            </Text>

            <Text style={styles.info}>
                📍 {circuito.Circuit.Location.locality}
            </Text>

            <Text style={styles.info}>
                📅 {fechaFormateada}
            </Text>

                <Text style={styles.info}>
                    <Text style={styles.bold}>Ronda:</Text>{" "}
                    {circuito.round}
                </Text>

                <Text style={styles.info}>
                    <Text style={styles.bold}>Temporada:</Text>{" "}
                    {circuito.season}
                </Text>

            </View>

        </View>
    );
};

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

    granPremio: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#E10600",
        textAlign: "center",
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#E10600",
        paddingBottom: 8,
        width: "100%",
    },

    infoBox: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.08)",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#444",
    },

    info: {
        color: "white",
        fontSize: 14,
        marginVertical: 4,
    },

    bold: {
        fontWeight: "bold",
        color: "#E10600",
    },
});