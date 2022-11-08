import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  PermissionStatus,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Http from './lib/http';

export default class BarcodeScan extends Component {
  constructor(props) {
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false,
      status: '',
    };
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  onBarCodeRead = e => {
    //buscar en la base de datos
    //si existe, mostrar el producto
    //si no existe, llama a la vista de crear producto
    console.log(e.data)
    const getdata = async () => {
      let res = await Http.instance.buscarProducto(e.data).then(respuesta => {
        if (Object.keys(respuesta).length > 0) {
          this.props.navigation.navigate('Producto', {item: respuesta});
        } else {
          this.props.navigation.navigate('AltaProducto', {item: e.data});
        }
      });
    };
    getdata();
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          flashMode={
            this.state.torchOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => (this.camera = cam)}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            //console.log(barcodes);
          }}
          refreshAuthorizationStatus={true}></RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity
            onPress={() => this.handleTourch(this.state.torchOn)}>
            {/*<Image style={styles.cameraIcon}
  source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />*/}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  handleTourch(value) {
    if (value === true) {
      this.setState({torchOn: false});
    } else {
      this.setState({torchOn: true});
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
