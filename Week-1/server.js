var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', function(req,res){
  res.send('Hello World - Laxmi Sathy');
});

app.get('/setcookie', function(req,res){
  res.cookie('name','Laxmi');
  res.cookie('age','43');
  res.status(200).send('Cookies set');
  
});

app.get('/getcookie', function(req,res){
  res.send('Name: ' + req.cookies['name']  +'</br>' +'Age:   ' + req.cookies['age']);
      
});

app.get('/html', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/image', function(req,res){
  res.sendFile(__dirname + '/img.jpg');
});
app.get('/input', function(req,res){
   res.sendFile(__dirname + '/input.html');
});

app.post('/input', function(req,res){
   console.log('POST data from form submission is:  ' , req.body.textName);
   res.send('The Entered Text is:   ' + req.body.textName);
});
app.get('/authors', function(req,res){
   res.sendFile(__dirname + '/authors.html');
});

app.get('/main.js', function(req,res){
   res.sendFile(__dirname + '/main.js');
});
app.get('/main1.js', function(req,res){
   res.sendFile(__dirname + '/main1.js');
});
app.get('/input.js', function(req,res){
   res.sendFile(__dirname + '/input.js');
});

app.use(function(req,res,next){
 if('/robots.txt' == req.url) {
    res.redirect('http://httpbin.org/deny');
  
 } else {
    next();
 }
});


app.listen(8080, function() {
  console.log('App listening on port 8080');
});