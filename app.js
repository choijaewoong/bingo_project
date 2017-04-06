var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/bingo.html'));
});

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
});