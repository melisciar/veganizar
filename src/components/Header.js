import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 35}}>Veganizar</Text>
      <Image
        source={require('../images/pp.jpg')}
        style={{width: 50, height: 50}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
