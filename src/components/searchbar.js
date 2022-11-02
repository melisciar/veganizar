//searchbar component on react native
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

export default class Barra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Icon
          name="search"
          size={25}
          color="#000"
          onPress={() => this.props.onSearch(this.state.text)}
        />
      </View>
    );
  }
 }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 5,
  },
});