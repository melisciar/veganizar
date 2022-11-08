/*
    Pantalla para dar de alta productos en la colección "productos" de la base de datos.
    Estrucutra:
    - id: igual al código de barras
    - Código de barras (obligatorio)(solo números)
    - Nombre (obligatorio)
    - Descripción (opcional)
    - Marca (opcional)
    - Ingredientes (obligatorio) (array de strings)
    - Vegano (opcional) (booleano)
    - Dudoso (opcional) (booleano)
    - Puede contener (opcional) (array de strings)
    - Contiene (opcional) (array de strings)
    - Sin tacc (opcional) (booleano)
    - Vegetariano (opcional) (booleano)
    - Categoría (opcional) (array de strings) (se puede seleccionar más de una) (se pueden obtener de la colección "categorias")
    - Imagen (opcional) (url)
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const AltaProducto = ({route}) => {
  //const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marca, setMarca] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [vegano, setVegano] = useState('');
  const [dudoso, setDudoso] = useState('');
  const [puedeContener, setPuedeContener] = useState([]);
  const [contiene, setContiene] = useState([]);
  const [sinTacc, setSinTacc] = useState('');
  const [vegetariano, setVegetariano] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const {item} = route.params;

  //inicializar el codigo de barras con el codigo de barras del producto escaneado
  const codigo = item
  const navigation = useNavigation();

  const altaProducto = () => {
    firestore()
      .collection('productos', codigo)
      .add({
        codbarras: codigo,
        nombre: nombre,
        descripcion: descripcion,
        marca: marca,
        ingredientes: ingredientes,
        vegano: vegano,
        dudoso: dudoso,
        puedeContener: puedeContener,
        contiene: contiene,
        sinTacc: sinTacc,
        vegetariano: vegetariano,
        categoria: categoria,
        imagen: imagen,
      })
      .then(() => {
        alert('Producto dado de alta');
        navigation.navigate('Productos');
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <ScrollView Containerstyle={styles.container}>
      <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={text => setNombre(text)}
        />
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          onChangeText={text => setDescripcion(text)}
        />
        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          placeholder="Marca"
          onChangeText={text => setMarca(text)}
        />
        <Text style={styles.label}>Ingredientes</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingredientes"
          onChangeText={text => setIngredientes(text.split(','))}
        />
        <Text style={styles.label}>Vegano</Text>
        <Picker
          selectedValue={vegano}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setVegano(itemValue)}>
          <Picker.Item label="Seleccionar" value="" />
          <Picker.Item label="Sí" value="true" />
          <Picker.Item label="No" value="false" />
        </Picker>
        <Text style={styles.label}>Dudoso</Text>
        <Picker
          selectedValue={dudoso}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setDudoso(itemValue)}>
          <Picker.Item label="Seleccionar" value="" />
          <Picker.Item label="Sí" value="true" />
          <Picker.Item label="No" value="false" />
        </Picker>
        <Text style={styles.label}>Puede contener</Text>
        <TextInput
          style={styles.input}
          placeholder="Puede contener"
          onChangeText={text => setPuedeContener(text.split(','))}
        />
        <Text style={styles.label}>Contiene</Text>
        <TextInput
          style={styles.input}
          placeholder="Contiene"
          onChangeText={text => setContiene(text.split(','))}
        />
        <Text style={styles.label}>Sin tacc</Text>
        <Picker
          selectedValue={sinTacc}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSinTacc(itemValue)}>
          <Picker.Item label="Seleccionar" value="" />
          <Picker.Item label="Sí" value="true" />
          <Picker.Item label="No" value="false" />
        </Picker>
        <Text style={styles.label}>Vegetariano</Text>
        <Picker
          selectedValue={vegetariano}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setVegetariano(itemValue)}>
          <Picker.Item label="Seleccionar" value="" />
          <Picker.Item label="Sí" value="true" />
          <Picker.Item label="No" value="false" />
        </Picker>
        <Text style={styles.label}>Categoría</Text>
        <Picker
          selectedValue={categoria}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
          <Picker.Item label="Seleccionar" value="" />
          <Picker.Item label="Bebidas" value="bebidas" />
          <Picker.Item label="Congelados" value="congelados" />
          <Picker.Item label="Cereales" value="cereales" />
          <Picker.Item label="Dulces" value="dulces" />
          <Picker.Item label="Galletitas" value="galletitas" />
          <Picker.Item label="Lácteos" value="lacteos" />
          <Picker.Item label="Legumbres" value="legumbres" />
          <Picker.Item label="Panadería" value="panaderia" />
          <Picker.Item label="Pastas" value="pastas" />
          <Picker.Item label="Snacks" value="snacks" />
        </Picker>
        <Text style={styles.label}>Imagen</Text>
        <TextInput
          style={styles.input}
          placeholder="Imagen"
          onChangeText={text => setImagen(text)}
        />
        <Button title="Dar de alta" onPress={altaProducto} />
      </View>
      </View>
    </ScrollView>
  );
};

export default AltaProducto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    padding: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});
