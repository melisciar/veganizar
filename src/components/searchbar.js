import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';

export default class Barra extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        placeholder="Buscar"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
