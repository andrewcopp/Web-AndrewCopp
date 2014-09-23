// server.js

// BASE SETUP
// =============================================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var path = require('path');

var db = require('./config/db');

var port = process.env.PORT || 3000;

app.set('views', (__dirname + '/app/views')); // app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); // app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(db.url);

// START THE SERVER
// =============================================================

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
