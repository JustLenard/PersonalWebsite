const themes = document.querySelectorAll('.theme-dot');

let theme = localStorage.getItem('theme');

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
