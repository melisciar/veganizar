import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Grilla from './Grilla';
import {createStackNavigator} from '@react-navigation/stack';
// import Listado from './Listado';
// import Detalle from './Detalle';
import Principal from './Principal';
import categorias from '../categorias';
import perfil from '../perfil';
import escanear from '../escanear';
import ingredientes from '../ingredientes';
import Detalle from '../detalle';
import SubCategorias from '../subcategorias';
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Principal} />
      <Stack.Screen name="categorias" component={categorias} />
      <Stack.Screen name="perfil" component={perfil} />
      <Stack.Screen name="escanear" component={escanear} />
      <Stack.Screen name="ingredientes" component={ingredientes} />
      <Stack.Screen name="Detalle" component={Detalle} />
      <Stack.Screen name="SubCategorias" component={SubCategorias} />
    </Stack.Navigator>
  );
};

export default Home;
