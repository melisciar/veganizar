import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
} from 'react-native';

const Grilla = props => {
  return (
    // Try setting `flexDirection` to `column`.
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('categorias')}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require('../images/productos.png')}
              style={styles.theImage}>
              <Text style={styles.nombres}>Categorías</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('escanear')}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require('../images/barcode.png')}
              style={styles.theImage}>
              <Text style={styles.nombres}>Escanear</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('perfil')}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require('../images/favoritos.jpg')}
              style={styles.theImage}>
              <Text style={styles.nombres}>Favoritos</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('ingredientes')}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require('../images/ingredientes.png')}
              style={styles.theImage}>
              <Text style={styles.nombres}>Ingredientes</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    overflow: 'hidden',
    margin: 5,
    borderRadius: 2,
    // backgroundColor: 'pink'
  },
  theImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombres: {
    fontSize: 25,
    color: '#333',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5
  },
});

export default Grilla;