import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC1jADosLzEG3Arsbxf2U1RyXqo_NIrtEA",
  authDomain: "tamb-ai.firebaseapp.com",
  databaseURL: "https://tamb-ai.firebaseio.com",
  projectId: "tamb-ai",
  storageBucket: "tamb-ai.appspot.com",
  messagingSenderId: "543406706070",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};