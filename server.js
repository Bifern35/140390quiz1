var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'www.db4free.net',
    user     : 's140390',
    password : 'abc123**',
    database : 'db140390'
  });
  connection.connect()
app.set('view engine','ejs');
app.get('/', function(req,res){
    res.render('pages/home');
});
app.get('/home', function(req,res){
    res.render('pages/home');
});

connection.end()
console.log('App is runnins at http://localhost:3000');
app.listen(3000);