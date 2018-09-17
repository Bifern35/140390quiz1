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
app.get('/students', function(req,res){
    connection.query('SELECT * from students', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/students',{students : rows})
        console.log('The students is: ', rows[0].students)
      })
      
});
app.get('/subjects', function(req,res){
    connection.query('SELECT * from subjects', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/subjects',{subjects : rows})
        console.log('The subjects is: ', rows[0].students)
      })
      
});
//connection.end()
console.log('App is runnins at http://localhost:3000');
app.listen(3000);