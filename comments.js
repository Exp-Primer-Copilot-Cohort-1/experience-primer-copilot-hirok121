// Create web server
var express = require('express');
var app = express();
// Create database
var mongojs = require('mongojs');
// Create database object
var db = mongojs('contactlist', ['contactlist']);
// Create body-parser object
var bodyParser = require('body-parser');
// Create object
var http = require('http');
// Create object
var path = require('path');
// Create object
var fs = require('fs');
// Set port
var port = process.env.PORT || 3000;
// Set path
var publicPath = path.resolve(__dirname, "public");
// Set path
app.use(express.static(publicPath));
// Set path
app.use(bodyParser.urlencoded({extended: true}));
// Set path
app.use(bodyParser.json());
// Set path
app.use(express.static(__dirname + '/public'));
// Set path
app.use(express.static(__dirname + '/node_modules'));
// Set path
app.use(express.static(__dirname + '/bower_components'));
// Set path
app.use(express.static(__dirname + '/public/app'));
// Set path
app.use(express.static(__dirname + '/public/app/controllers'));
// Set path
app.use(express.static(__dirname + '/public/app/services'));
// Set path
app.use(express.static(__dirname + '/public/app/views'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/users'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/add'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/edit'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/delete'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/view'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/view/individual'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/view/individual/notes'));
// Set path
app.use(express.static(__dirname + '/public/app/views/pages/admin/contacts/view/individual/notes/add'));
// Set path
app.use