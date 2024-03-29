import React, {Component, useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Http from './lib/http';

const Categorias = props => {
  //listado de categorias
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    let res = await Http.instance.get('categorías');
    setCat(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.lista}>
      <FlatList
        style={styles.lista}
        data={cat}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Productos', {item})}
            style={[styles.item]}>
            <Text style={styles.texto}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Categorias;

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
  },
  item: {
    margin: 2,
    padding: '10%',
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#B4E37D',
  },
});
