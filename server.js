'use strict';

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 1337);

app.use(express.static(__dirname + '/'));

// get index
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

// server
app.listen(app.get('port'));
console.log('Listening on 1337 in development...');
