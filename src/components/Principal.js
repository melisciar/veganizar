import React from 'react';
import {StyleSheet, View} from 'react-native';
import Grilla from './Grilla';
import Barra from './searchbar';

const Principal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {/* <Barra /> */}
      </View>
      <View style={styles.grilla}>
        <Grilla navigation={navigation} />
      </View>
      <View style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B4E37D',
    flex: 1,
  },
  search: {
    flex: 2,
    backgroundColor: '#B4E37D'
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
export default Principal;