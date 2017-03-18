import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBZFqibKeXW6xbmx52nP6CShYtChswDiDw",
    authDomain: "my-app-firebase-react-91002.firebaseapp.com",
    databaseURL: "https://my-app-firebase-react-91002.firebaseio.com",
    storageBucket: "my-app-firebase-react-91002.appspot.com",
    messagingSenderId: "359130158949"
};
firebase.initializeApp(config);


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
