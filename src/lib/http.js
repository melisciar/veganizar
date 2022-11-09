import firestore from '@react-native-firebase/firestore';

class Http {
  static instance = new Http();
  get = async coleccion => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  //buscar un producto por su codigo de barras, devuelve un objeto
  buscarProducto = async codigo => {
    try {
      let producto = {};
      await firestore()
        .collection('productos')
        .where('codbarras', '==', codigo)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            producto = doc.data();
          });
        });
      return producto;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  //Filtrar productos por la categoría
  buscarProductos = async cat => {
    try {
      const arreglo = [];
      await firestore()
        .collection('productos')
        .where('categoria', '==', cat)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  post = async (coleccion, body) => {
    try {
      const respuesta = await firestore().collection(coleccion).add(body);
      return respuesta;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  put = async (coleccion, id, body) => {
    try {
      const respuesta = await firestore()
        .collection(coleccion)
        .doc(id)
        .update(body);
      return respuesta;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  delete = async (coleccion, id) => {
    try {
      const respuesta = await firestore()
        .collection(coleccion)
        .doc(id)
        .delete();
      return respuesta;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '==', body)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search2 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search3 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '<=', body)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search4 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .where('nombre', '<=', body + '\uf8ff')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search5 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .where('nombre', '<=', body + '\uf8ff')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search6 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .where('nombre', '<=', body + '\uf8ff')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search7 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .where('nombre', '<=', body + '\uf8ff')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };

  search8 = async (coleccion, body) => {
    try {
      const arreglo = [];
      await firestore()
        .collection(coleccion)
        .where('nombre', '>=', body)
        .where('nombre', '<=', body + '\uf8ff')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            arreglo.push(doc.data());
          });
        });
      return arreglo;
    } catch (err) {
      console.log(err, 'pasaron cosas reina');
      throw Error(err);
    }
  };
}

export default Http;
