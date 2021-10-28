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
}

export default Http;
