const express = require('express')
const app = express();
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb+srv://mongodbtest123:lN6bDqo4vy2fXKtS@cluster0-osrar.mongodb.net/test?retryWrites=true&w=majority";



//test

app.get('/', function(req, res, next) {
  //res.json({ message: 'Hello World', message1: 'Hello World 1' });
    
  MongoClient.connect(url, function(err, db) {
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


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
