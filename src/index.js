import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyAErVI4ldtmJTqp5oUh3FruvBbbj6ANVHA",
	authDomain: "pseudogram-e97de.firebaseapp.com",
	databaseURL: "https://pseudogram-e97de.firebaseio.com",
	projectId: "pseudogram-e97de",
	storageBucket: "",
	messagingSenderId: "185295431523",
	appId: "1:185295431523:web:61075bfcae364e82"
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
