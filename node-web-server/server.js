const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		welcomeMessage: 'Yeahyeahyeah'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port ' + 3000);
});