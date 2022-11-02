import React, {Component, useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Http from './lib/http';
import Barra from './components/searchbar';
//import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const Ingredientes = props => {
  const [ing, setIng] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    let res = await Http.instance.get('ingredientes');
    setIng(res);
  };
  useEffect(() => {
    getData();
  }, []);

  //debe filtrar por nombre e INS
  const handleSearch = text => {
    function filtrar() {
      setIng(
        ing.filter(ing => {
          //si existe ing.ins y es un string, filtrar por INS
          if (ing.INS && typeof ing.INS === 'string') {
            return ing.INS.includes(text) || ing.nombre.includes(text);
          } else {
            return ing.nombre.includes(text);
          }
        }),
      );
    }
    if (text === '') {
      getData();
    } else {
      filtrar();
    }
  };

  return (
    <View style={styles.lista}>
      <Barra onSearch={handleSearch} />
      <FlatList
        style={styles.lista}
        data={ing}
        renderItem={
          ({item}) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Detalle', {item})}
              style={[
                styles.ingrediente,
                item.vegano
                  ? styles.vegano
                  : item.dudoso
                  ? styles.dudoso
                  : styles.novegano,
              ]}>
              <Text>{item.INS}</Text>
              <Text style={styles.texto}>{item.nombre}</Text>
            </TouchableOpacity>
          )
          //al hacer click en un ingrediente, debe llevar a la pantalla de detalle
          //onPress={() => props.navigation.navigate('Detalle', {item})}
          //<Item item={item} onPress={() => handlePress(item)} />
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#B4E37D',
    flex: 1,
  },
  search: {
    flex: 2,
  },
  texto: {
    fontSize: 20,
    padding: 5,
  },
  ingrediente: {
    margin: 2,
    borderRadius: 2,
  },
  vegano: {
    backgroundColor: 'green',
  },
  dudoso: {
    backgroundColor: 'orange',
  },
  novegano: {
    backgroundColor: 'red',
  },
  vegetariano: {
    backgroundColor: 'lightGreen',
  },
  grilla: {
    flex: 10,
    backgroundColor: '#F0FAE5',
    borderRadius: 5,
    margin: 5,
    padding: 7,
    alignContent: 'space-around',
  },
});

export default Ingredientes;
