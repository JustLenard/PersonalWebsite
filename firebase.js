import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
	getDatabase,
	ref,
	set,
	child,
	update,
	remove,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

const firebaseConfig = {
	apiKey: 'AIzaSyD6OK6WdxmsrZSNDsmjnl7wAnUeijnQlms',
	authDomain: 'portfolio-3712b.firebaseapp.com',
	databaseURL:
		'https://portfolio-3712b-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'portfolio-3712b',
	storageBucket: 'portfolio-3712b.appspot.com',
	messagingSenderId: '129962496740',
	appId: '1:129962496740:web:e245db655ba93c6298d2f1',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	console.log('whyy');
	var name = getInputVal('name');
	var subject = getInputVal('subject');
	var email = getInputVal('email');
	var message = getInputVal('message');

	// Save message
	console.log(name);
	insertData(name, subject, email, message);
}

function getInputVal(id) {
	return document.getElementById(id).value;
}

function insertData(name, subject, email, message) {
	set(ref(db, 'Mails-' + name), {
		name: name,
		subject: subject,
		email: email,
		message: message,
	}).then(() => {
		alert(
			'Hey there. Thanks for getting in touch with me. I will contact you back you soon.'
		);
	});
}
