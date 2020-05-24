// http://127.0.0.1:9001
// http://localhost:9001
	var server		   = require('http'),
		path		   = require('path'),
		fs 			   = require('fs');
	
	var express		   =         require("express");
	var app            =         express();
	var session		   =         require('express-session');
	var io 			   = 		 require('socket.io');
	var wav 		   = 		 require('wav');
	//body pahesr untuk input dari html
	var bodyParser     =         require("body-parser");
	//parse jquery login
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());	
	
	var MongoClient = require('mongodb').MongoClient;
	//var url = "mongodb://localhost:27017/areleo_db";
	var urldb = "mongodb://db_test:12345@ds127564.mlab.com:27564/db_test";
	
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

// see how to use a valid certificate:
// https://github.com/muaz-khan/WebRTC-Experiment/issues/62
var options = {
    key: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/privatekey.pem'))),
    cert: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/certificate.pem')))
};

// force auto reboot on failures
var autoRebootServerOnFailure = false;


// skip/remove this try-catch block if you're NOT using "config.json"
try {
    var config = require(resolveURL('./config.json'));

    if ((config.port || '').toString() !== '9001') {
        port = parseInt(config.port);
    }

    if ((config.autoRebootServerOnFailure || '').toString() !== true) {
        autoRebootServerOnFailure = true;
    }
} catch (e) {}

// You don't need to change anything below

var server = require(isUseHTTPs ? 'https' : 'http');
var url = require('url');

app.get('/rtc',function(req,res){

    if(typeof req.session.uniqueId == "undefined") {
		console.log("Not Login");
		res.redirect('/login');
	}else {
		res.sendfile("demos/Video-Conferencing.html");
	}
    
});



app.post('/login', function(req, res) {

  var NAME=req.body.user;
  var PASSWORD=req.body.password;
  console.log(NAME);
  
  
  MongoClient.connect(urldb, function(err, db) {
  //if (err) throw err;
  var query = { NAME: NAME, PASSWORD: PASSWORD };
  db.collection("login").find(query).toArray(function(err, result) {
    //console.log("data" + req.session.uniqueId +"data" );
	 
	global.globalString = NAME; 
	
	
            if (1 > result.length) { 
			
				if (err) throw err;console.log("not found");
				res.redirect('/login');
				}
            else{
                console.log(result);
				req.session.uniqueId = NAME;
				
				
				if(!req.session.uniqueId) {
				console.log("Not Login");
				res.redirect('/login');
				}else {
				res.redirect('/rtc');
				console.log("Login");

				}
            }	
    db.close();
  });
});
});

app.get('/test', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
    
  MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  //Sort the result by name:
  var sort = { nama: 1 };
  db.collection("address").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
	var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  }); 
  });
   
});

//insert
app.post('/insert', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myobj = { NAME: NAME, TELEPHONE: TELEPHONE, ADDRESS: ADDRESS };
  db.collection("address").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});  

});
//read





app.get('/userdata', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
		NAME = req.session.uniqueId;
  MongoClient.connect(urldb, function(err, db) {
  //if (err) throw err;
  var query = { NAME: NAME };
  db.collection("login").find(query).toArray(function(err, result) {
    console.log("data" + req.session.uniqueId +"data" );
	
	
	var myJsonString = JSON.stringify(result);
	res.json(result);	
    db.close();
  });
});
   
});



app.get('/id_user', function(req, res, next) {
		NAME = req.session.uniqueId;

	res.json({ message: NAME });



   
});




app.get('/test', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
    
  MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  //Sort the result by name:
  var sort = { nama: 1 };
  db.collection("address").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
	var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  }); 
  });
   
});
  



//logout
app.get('/logout', function(req, res) {

req.session.destroy();
res.redirect('/login');

});



//session

app.get('/sessionuser',function(req,res){

console.log(req.session.uniqueId);

res.json({ message: req.session.uniqueId, message1: 'Hello World 1' });
    
});




//insert
app.post('/create', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myobj = { NAME: NAME, TELEPHONE: TELEPHONE, ADDRESS: ADDRESS };
  db.collection("admin").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});  

});

//update
app.post('/update', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myquery = { NAME: NAME };
  var newvalues = { NAME: NAME, TELEPHONE: TELEPHONE, ADDRESS: ADDRESS };
  db.collection("admin").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});   

});
//delete
app.post('/delete', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myquery = { NAME: NAME };
  db.collection("admin").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});    

});







//admin
//insert
app.post('/createadmin', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myobj = { NAME: NAME, TELEPHONE: TELEPHONE, ADDRESS: ADDRESS };
  db.collection("admin").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});  

});
//read
app.get('/readadmin', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
    
  MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  //Sort the result by name:
  var sort = { nama: 1 };
  db.collection("admin").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
	var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  }); 
  });
   
});
//update
app.post('/updateadmin', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myquery = { NAME: NAME };
  var newvalues = { NAME: NAME, TELEPHONE: TELEPHONE, ADDRESS: ADDRESS };
  db.collection("admin").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});   

});
//delete
app.post('/deleteadmin', function(req, res) {

  var NAME=req.body.NAME;
  var TELEPHONE=req.body.TELEPHONE;
  var ADDRESS=req.body.ADDRESS;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myquery = { NAME: NAME };
  db.collection("admin").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});    

});

//insert
app.post('/timer', function(req, res) {

  var NAME=req.body.NAME;
  var TIMMERCALL=req.body.TIMMERCALL;

MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  var myobj = { NAME: NAME, TIMMERCALL: TIMMERCALL };
  db.collection("usertimer").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});  

});

app.get('/usertimer', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
  
MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  db.collection("usertimer").find({}).toArray(function(err, result) {
    if (err) throw err;
    var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  });
});
    
});

app.get('/useradmin', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
  
MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  db.collection("admin").find({}).toArray(function(err, result) {
    if (err) throw err;
    var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  });
});
    
});

app.get('/useraddress', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
  
MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  db.collection("address").find({}).toArray(function(err, result) {
    if (err) throw err;
    var myJsonString = JSON.stringify(result);
	res.json(result);
    db.close();
  });
});
    
});



app.get('/audio', function(req, res){
    console.log("send file wav")

    //send header Content length
    var stat = fs.statSync('gameover.wav');
    res.set('Content-Length', stat.size);

    fs.createReadStream('gameover.wav').pipe(res);
});



require('./link.js').make("data", "kata", app);
require('./link.js').makedata("data", "kata", app);



//Untuk menggunakan extensi yang berbeda
	
app.use(express.static(__dirname + ''));	



function cmd_exec(cmd, args, cb_stdout, cb_end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    me.exit = 0;
    me.stdout = "";
    child.stdout.on('data', function(data) {
        cb_stdout(me, data)
    });
    child.stdout.on('end', function() {
        cb_end(me)
    });
}

function log_console() {
    console.log(foo.stdout);

    try {
        var pidToBeKilled = foo.stdout.split('\nnode    ')[1].split(' ')[0];
        console.log('------------------------------');
        console.log('Please execute below command:');
        console.log('\x1b[31m%s\x1b[0m ', 'kill ' + pidToBeKilled);
        console.log('Then try to run "server.js" again.');
        console.log('------------------------------');

    } catch (e) {}
}

function runServer() {
    app.on('error', function(e) {
        if (e.code == 'EADDRINUSE') {
            if (e.address === '0.0.0.0') {
                e.address = 'localhost';
            }

            var socketURL = (isUseHTTPs ? 'https' : 'http') + '://' + e.address + ':' + e.port + '/';

            console.log('------------------------------');
            console.log('\x1b[31m%s\x1b[0m ', 'Unable to listen on port: ' + e.port);
            console.log('\x1b[31m%s\x1b[0m ', socketURL + ' is already in use. Please kill below processes using "kill PID".');
            console.log('------------------------------');

            foo = new cmd_exec('lsof', ['-n', '-i4TCP:9001'],
                function(me, data) {
                    me.stdout += data.toString();
                },
                function(me) {
                    me.exit = 1;
                }
            );

            setTimeout(log_console, 250);
        }
    });

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

    require('./Signaling-Server.js')(app, function(socket) {
        try {
            var params = socket.handshake.query;

            // "socket" object is totally in your own hands!
            // do whatever you want!

            // in your HTML page, you can access socket as following:
            // connection.socketCustomEvent = 'custom-message';
            // var socket = connection.getSocket();
            // socket.emit(connection.socketCustomEvent, { test: true });

            if (!params.socketCustomEvent) {
                params.socketCustomEvent = 'custom-message';
            }

            socket.on(params.socketCustomEvent, function(message) {
                try {
                    socket.broadcast.emit(params.socketCustomEvent, message);
                } catch (e) {}
            });
			


			
	
			
			
			
	MongoClient.connect(urldb, function(err, db) {
  if (err) throw err;
  db.collection("address").find({}).toArray(function(err, result) {
    if (err) throw err;
    var myJsonString = JSON.stringify(result);
	//res.json(result);
	
	socket.emit('phonebook', global.globalString)	;	
    db.close();
  });
});		
			
			
			
			
			
			
			
	
	    try {
        socket.on('draw', function(data){
		console.log("recibendo", data);
		
	    try {
                    socket.broadcast.emit('update', data);
					console.log("emit jalan")
                } catch (e) {console.log("emit eror")}		
		
		});
                } catch (e) {console.log("emit eror")}	
				
				
				
				
	    try {
        socket.on('call', function(data){
		console.log("recibendo", data);
		
	    try {
                    socket.broadcast.emit('caller', data);
					console.log("emit jalan")
                } catch (e) {console.log("emit eror")}		
		
		});
                } catch (e) {console.log("emit eror")}				
				
				
				
	
	
	    try {
                    socket.emit('welcome', "message pesan");
					console.log("emit jalan")
                } catch (e) {console.log("emit eror")}

			
			// Send Message
socket.on('send message', function(data){
	console.log("data send");
	
	                try {
                    socket.emit('new message', data);
					console.log("emit jalan")
                } catch (e) {console.log("emit eror")}
		

	});
			
        } catch (e) {}
    });
}

if (autoRebootServerOnFailure) {
    // auto restart app on failure
    var cluster = require('cluster');
    if (cluster.isMaster) {
        cluster.fork();

        cluster.on('exit', function(worker, code, signal) {
            cluster.fork();
        });
    }

    if (cluster.isWorker) {
        runServer();
    }
} else {
    runServer();
}
