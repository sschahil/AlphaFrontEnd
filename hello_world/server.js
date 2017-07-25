var express = require('express');
var app = express();
var fs = require("fs");
const fileUpload = require('express-fileupload');

var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload());

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" 	+ 'index.html');
})

app.get('/process_get', function(req, res) {
	//Prepare output in JSON format
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res) {
	//Prepare output in JSON format
	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/upload', function(req, res) {
  //console.log("I am here");
  if (!req.files) {
  	//console.log("going back");
  	return res.status(400).send('No files were uploaded.');
  }
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('C:/Code/Front End/node/sendFile/destination/awesome.txt', function(err) {
  //console.log("inside sample file");
  console.log("Sample File name is " + JSON.stringify(sampleFile));
	if (err) {
      console.log("there was an error");
      return res.status(500).send(err);
    }
  //console.log("good to go!!");
    res.send('File uploaded!');
 	});
});

app.get('/', function(req, res) {
	res.send('Hello World');
})

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})