import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

//Página de detalle de producto
//Se muestra la información del producto seleccionado
/*
    Parámetros:
        - route: contiene el producto seleccionado
    
    Estado:
        - producto: contiene el producto seleccionado

    Item:
        - nombre: nombre del producto
        - descripcion: descripción del producto
        - imagen: imagen del producto
        - vegano: indica si el producto es vegano
        - dudoso: indica si el producto es dudoso
        - ingredientes: lista de ingredientes del producto
        - marca: marca del producto
        - categoria: categoría del producto
        - puede contener: lista de ingredientes que puede contener el producto
        - contiene: lista de alérgenos que contiene el producto
        - sin tacc: indica si el producto es sin tacc
        - vegetariano: indica si el producto es vegetariano
*/
const Producto = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.nombre}</Text>
      <Text style={styles.texto}>{item.marca}</Text>
      <Text style={styles.texto}>{item.descripcion}</Text>
      {/*<Image style={styles.imagen} source={{uri: item.imagen}} />*/}
      <Text style={styles.texto}> Ingredientes: </Text>
      <Text style={styles.texto}>{item.ingredientes}</Text>
      <Text style={styles.texto}>
        {item.vegano ? 'Vegano' : item.dudoso ? 'Dudoso' : 'No vegano'}
      </Text>
    </View>
  );
};

export default Producto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4E37D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    padding: 5,
  },
  texto: {
    fontSize: 20,
    padding: 5,
  },
  imagen: {
    width: 200,
    height: 200,
  },
});
