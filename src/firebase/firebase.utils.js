import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGjJ3V-okWqGRdvlyPbmaYakxr_ifoiOM",
  authDomain: "crwn-db-1f9b6.firebaseapp.com",
  databaseURL: "https://crwn-db-1f9b6.firebaseio.com",
  projectId: "crwn-db-1f9b6",
  storageBucket: "crwn-db-1f9b6.appspot.com",
  messagingSenderId: "918253111852",
  appId: "1:918253111852:web:ad2924bbbfd49239a69f89"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;