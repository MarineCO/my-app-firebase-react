import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBhoUrNWErNekjJUoDIzOcGm2kPYi8ZaxU",
	authDomain: "my-app-firebase-react.firebaseapp.com",
	databaseURL: "https://my-app-firebase-react.firebaseio.com",
	storageBucket: "my-app-firebase-react.appspot.com",
	messagingSenderId: "884979448697"
};
firebase.initializeApp(config);


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
