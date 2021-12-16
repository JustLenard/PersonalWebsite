// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBdsy-rkSmyS_efQ2GftaKqIZNLC2q-XlE',
	authDomain: 'portfolio-280af.firebaseapp.com',
	projectId: 'portfolio-280af',
	storageBucket: 'portfolio-280af.appspot.com',
	messagingSenderId: '233195005666',
	appId: '1:233195005666:web:c445e6373c67b61a1ea0bb',
};

const themes = document.querySelectorAll('.theme-dot');
const typeHere = document.querySelector('#animated-text');
const typeHere2 = document.querySelector('#animated-text2');
const place1 = document.querySelector('#place1');
const place2 = document.querySelector('#place2');

const text = "console.log('";
const text2 = "Hi, I am Vitalie')";

let theme = localStorage.getItem('theme');

var i = 0;
var j = 0;

document.querySelector('#contact-form').addEventListener('submit', submitForm);

// Deals with the data from Contact form.
function submitForm(e) {
	e.preventDefault();
	console.log('whyy');
	var name = getInputVal('name');
	var subject = getInputVal('subject');
	var email = getInputVal('email');
	var message = getInputVal('message');

	//Save message
	// saveMessage(name, subject, email, message);
}

function getInputVal(id) {
	return document.getElementById(id).value;
}

// var messagesRef = firebase.database().ref('messages');

//Save message to FireBase
function saveMessage(name, subject, email, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		subject: subject,
		email: email,
		message: message,
	});
}

// Text Animation
function type() {
	if (i < text.length) {
		typeHere.textContent += text[i];
		i++;
		setTimeout(type, 250);
	} else if (j < text2.length) {
		place1.classList.remove('thingy');
		place2.classList.add('thingy');
		typeHere2.textContent += text2[j];
		j++;
		if (j === 3) {
			setTimeout(type, 2000);
		} else if (j === 18) {
			setTimeout(type, 2000);
		} else {
			setTimeout(type, 250);
		}
	} else if (j === text2.length) {
		j++;
		place2.classList.remove('thingy');
		place1.classList.add('thingy');
		setTimeout(type, 1500);
	} else if (j === text2.length + 1) {
		j++;
		typeHere.classList.add('active');
		setTimeout(type, 1000);
	} else if (typeHere.classList.contains('active')) {
		typeHere.textContent = '';
		place1.classList.remove('thingy');
		place2.classList.add('thingy');
		i = 100;
		typeHere.classList.remove('active');
		setTimeout(type, 1500);
	} else if (i === 100) {
		i++;
		typeHere2.textContent = "Hi, I am Vitalie'";
		setTimeout(type, 250);
	} else if (i === 101) {
		i++;
		typeHere2.textContent = 'Hi, I am Vitalie';
		setTimeout(type, 1000);
	} else if (i === 102) {
		i++;
		typeHere2.textContent = 'Hi, I am Vitalie=';
		setTimeout(type, 2000);
	} else if (i === 103) {
		i++;
		typeHere2.textContent = 'Hi, I am Vitalie=)';
		setTimeout(type, 2000);
	} else if (i === 104) {
		place2.classList.remove('thingy');
	}
}
setTimeout(type, 2000);

// Themes
if (theme === null) {
	setTheme('default');
} else {
	setTheme(theme);
}

for (let i = 0; i < themes.length; i++) {
	themes[i].addEventListener('click', function () {
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode === 'default') {
		document.querySelector('#theme-style').href = 'default.css';
	}
	if (mode === 'blue') {
		document.querySelector('#theme-style').href = 'blue.css';
	}
	if (mode === 'green') {
		document.querySelector('#theme-style').href = 'green.css';
	}
	if (mode === 'purple') {
		document.querySelector('#theme-style').href = 'purple.css';
	}

	localStorage.setItem('theme', mode);
}
