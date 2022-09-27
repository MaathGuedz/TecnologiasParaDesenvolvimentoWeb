import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyB3zAQg5ZHD_1g0_N9LSFrRWkEDkrsRi9U",
  authDomain: "projetoead-ae684.firebaseapp.com",
  projectId: "projetoead-ae684",
  storageBucket: "projetoead-ae684.appspot.com",
  messagingSenderId: "1054067427698",
  appId: "1:1054067427698:web:9efce7d815f9656cc335eb"
};


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
