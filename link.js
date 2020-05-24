
function make(Schema, mongoose, app) {
    // Define Car model
	
	console.log(Schema+mongoose);
	app.get('/updateadmin',function(req,res){
  res.sendfile("areleo/admin/updateadmin.html");
});
	
	
}


function makedata(Schema, mongoose, app) {
    // Define Car model
app.get('/',function(req,res){
  res.sendfile("areleo/index.html");
});
		
app.get('/login',function(req,res){
  res.sendfile("areleo/loginr.html");
});

app.get('/testdata',function(req,res){
  res.sendfile("areleo/test.html");
});	

app.get('/create',function(req,res){
  res.sendfile("areleo/create.html");
});

app.get('/update',function(req,res){
  res.sendfile("areleo/update.html");
});

app.get('/delete',function(req,res){
  res.sendfile("areleo/delete.html");
});

app.get('/insertdata',function(req,res){
  res.sendfile("areleo/insert.html");
});

app.get('/updatedata',function(req,res){
  res.sendfile("areleo/update.html");
});

app.get('/deletedata',function(req,res){
  res.sendfile("areleo/delete.html");
});

//admin
app.get('/createadmin',function(req,res){
  res.sendfile("areleo/admin/createadmin.html");
});

app.get('/readadminr',function(req,res){
  res.sendfile("areleo/admin/readadmin.html");
});	

app.get('/updateadmin',function(req,res){
  res.sendfile("areleo/admin/updateadmin.html");
});

app.get('/deleteadmin',function(req,res){
  res.sendfile("areleo/admin/deleteadmin.html");
});


app.get('/createuseradmin',function(req,res){
  res.sendfile("areleo/admin/createuseradmin.html");
});

app.get('/loginadmin',function(req,res){
  res.sendfile("areleo/admin/loginadmin.html");
});





app.get('/dashboardadmin',function(req,res){
  res.sendfile("areleo/admin/dashboard.html");
});



	
	
}

module.exports.make = make;
module.exports.makedata = makedata;