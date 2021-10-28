import React, {Component, useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, StyleSheet, Platform} from 'react-native';
import Http from './lib/http';
import Barra from './components/searchbar';
import {colors, ThemeProvider} from 'react-native-elements';

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

  const theme = {
    colors: {
      ...Platform.select({
        default: colors.platform.android,
        ios: colors.platform.ios,
      }),
    },
  };

  return (
    <View style={styles.lista}>
      <ThemeProvider theme={theme}>
        <Barra />
      </ThemeProvider>
      <FlatList
        style={styles.lista}
        data={ing}
        renderItem={
          ({item}) => (
            <View
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
            </View>
          )
          // <Item item={item} onPress={() => handlePress(item)} />
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
