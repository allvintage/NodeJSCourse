const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		currentYear: new Date().getFullYear(),
		welcomeMessage: 'Suck on this, bitch'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: "Shit dont work"
	});
});

app.listen(3000, () => {
	console.log('Server is up on port ' + 3000);
});