import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCeFwx3sJRMpw8HOYRw80nyCZB1w8RXCKg',
  authDomain: 'rn-crud-a489b.firebaseapp.com',
  projectId: 'rn-crud-a489b',
  storageBucket: 'rn-crud-a489b.appspot.com',
  messagingSenderId: '81941868764',
  appId: '1:81941868764:web:be3b6c16e30d69f6348419',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
