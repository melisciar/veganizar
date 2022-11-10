import React, {Component, useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, StyleSheet, Platform, TouchableOpacity, Image} from 'react-native';
import Http from './lib/http';
import { useNavigation } from '@react-navigation/native';

const Productos = ({route}) => {
  //listado de categorias
  const navigation = useNavigation()
  const element = route.params;
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    let res = await Http.instance.buscarProductos(element.item.nombre);
    setProd(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.lista}>
      <FlatList
        style={styles.lista}
        data={prod}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Producto', {item})}
            style={[styles.item]}>
            <Text style={styles.texto}>{item.marca}</Text>
            <Text style={styles.texto}>{item.nombre}</Text>
            <Image style={styles.image} source={{uri: item.imagen || "https://placetaytay.com/100x100"}} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Productos;

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    backgroundColor: '#F0FAE5',
    borderRadius: 5,
    margin: 5,
    padding: 2,
    alignContent: 'space-around',
  },
  texto: {
    fontSize: 20,
    padding: 5,
    display: 'flex',
  },
  item: {
    margin: 2,
    padding: '10%',
    borderRadius: 5,
    flex: 2,
    backgroundColor: '#B4E37D',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
});
