// http://127.0.0.1:9001
// http://localhost:9001
	var server		   = require('http'),
		path		   = require('path'),
		fs 			   = require('fs');
	
	var express		   =         require("express");
	var app            =         express();
	var session		   =         require('express-session');
var MongoClient = require('mongodb').MongoClient;
	
	var MongoClient = require('mongodb').MongoClient;
	var urldb = "mongodb+srv://mongodbtest123:lN6bDqo4vy2fXKtS@cluster0-osrar.mongodb.net/test?retryWrites=true&w=majority";
	//var urldb = "mongodb://db_test:12345@ds127564.mlab.com:27564/db_test";
	
	//test
	app.use(session({secret:"hsad7378236sa8*7s7ssjjsh",resave:false,saveUninitialized:true}));

function resolveURL(url) {
    var isWin = !!process.platform.match(/^win/);
    if (!isWin) return url;
    return url.replace(/\//g, '\\');
}

// Please use HTTPs on non-localhost domains.
var isUseHTTPs = false;

// var port = 443;
var port = process.env.PORT || 9001;

var fs = require('fs');
var path = require('path');



// force auto reboot on failures
var autoRebootServerOnFailure = false;




// You don't need to change anything below

var server = require(isUseHTTPs ? 'https' : 'http');
var url = require('url');



//setting var global
global.globalString = "yongky"; 


app.get('/test', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
    
  MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testdb");
  var query = { NAME: "yongky" };
  dbo.collection("login").find(query).toArray(function(err, result) {
    if (err) throw err;
	var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  }); 
  });
   
});



  MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testdb");
  var query = { NAME: "yongky" };
  dbo.collection("login").find(query).toArray(function(err, result) {
    if (err) throw err;
	var myJsonString = JSON.stringify(result);
	console.log(result);
    db.close();
  }); 
  });



	
	
	

	
	
	
	
	

	
	
	
	
	//app = server.createServer(serverHandler);
    app = app.listen(port, process.env.IP || '0.0.0.0', function(error) {
        var addr = app.address();

        if (addr.address === '0.0.0.0') {
            addr.address = 'localhost';
        }

        var domainURL = (isUseHTTPs ? 'https' : 'http') + '://' + addr.address + ':' + addr.port + '/';

        console.log('------------------------------');

        console.log('socket.io is listening at:');
        console.log('\x1b[31m%s\x1b[0m ', '\t' + domainURL);

        console.log('\n');

        console.log('Your web-browser (HTML file) MUST set this line:');
        console.log('\x1b[31m%s\x1b[0m ', 'connection.socketURL = "' + domainURL + '";');

        if (addr.address != 'localhost' && !isUseHTTPs) {
            console.log('Warning:');
            console.log('\x1b[31m%s\x1b[0m ', 'Please set isUseHTTPs=true to make sure audio,video and screen demos can work on Google Chrome as well.');
        }

        console.log('------------------------------');
        console.log('Need help? http://bit.ly/2ff7QGk');
    });

			

