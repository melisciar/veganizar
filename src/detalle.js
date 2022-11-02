import React from "react";
import {Text, View} from "react-native";
import { StyleSheet } from "react-native";

//pantalla de detalle de los ingredientes, debe mostrar el nombre, la descripción, la foto y el estado vegano, recibe el ingrediente como parámetro
const Detalle = ({route}) => {
    const {item} = route.params;
    return (
        <View style={styles.container}>
        <Text style={styles.texto}>{item.nombre}</Text>
        <Text style={styles.texto}>{item.descripcion}</Text>
        {/*<Image style={styles.imagen} source={{uri: item.imagen}} />*/}
        <Text style={styles.texto}>
            {item.vegano
            ? "Vegano"
            : item.dudoso
            ? "Dudoso"
            : "No vegano"}
        </Text>
        </View>
    );
    }

export default Detalle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B4E37D",
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        fontSize: 20,
        padding: 5,
    },
    imagen: {
        width: 200,
        height: 200,
    }
});
