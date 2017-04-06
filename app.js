var express = require('express');
var path = require('path');
var engine = require('ejs-locals');

var app = express();

app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engine);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render(path.join(__dirname, 'public/bingo'));
});

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
});