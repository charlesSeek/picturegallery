var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty');
var Picture = require('./app/controllers/picture');
var multipartMiddleware = multipart();
app.use(express.static(__dirname+'/public'));
var dbUrl = 'mongodb://127.0.0.1/gallery';

mongoose.connect(dbUrl);
mongoose.connection.on("error", function (error) {
    console.log("connect to mongodb failure：" + error);
});
mongoose.connection.on("open", function () {
    console.log("------connect to mongodb sucessfully！------");
});


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



app.get('/',function(req,res){
	res.sendFile(__dirname+'/app/views/index.html');
});
app.get('/pictures',Picture.list);

//app.post('/pictures',Picture.post);
app.post('/pictures',multipartMiddleware,Picture.uploaded,Picture.addPicture);
	

app.delete('/pictures',Picture.delete);

app.listen(8080);