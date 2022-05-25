var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

require('dotenv').config()
// use res.render to load up an ejs view file
const PORT = process.env.PORT || 8080;

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = process.env.TAGLINE;

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(PORT);
console.log('Server is listening on port 8080');