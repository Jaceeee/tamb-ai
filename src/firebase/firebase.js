import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDkvHcnzBuW-nBc6SOlV4CMPF3U6Au2buI",
    authDomain: "tamb-ai.firebaseapp.com",
    databaseURL: "https://tamb-ai.firebaseio.com",
    projectId: "tamb-ai",
    storageBucket: "tamb-ai.appspot.com",
    messagingSenderId: "543406706070"
  };

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const auth = firebase.auth;

export {
    base,
    auth
};