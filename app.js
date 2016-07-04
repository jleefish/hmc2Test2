var express = require("express");
var cors = require("cors");
var mysql = require('mysql');
var bodyParser = require("body-parser");

//file system
var fs = require("fs-extra");

//retrieve form tags
//var formidable = require("formidable");

var app = express();

//mysql connection 
var connection = mysql.createConnection({
   host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'fruwunusp8Me',
    database: 'test',
    debug: false
});

connection.connect(function(err){
    if(err){
        console.log('Error connectiong DB');    
        throw err;
    }
    console.log('Mysql DB Connection estabilished\n');
});

var results;
connection.query('select * from sample2;', function (err, rows){
    console.log(rows);    
    results = rows;
})

//middle ware
app.use(function(req, res, next){
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app.use("/", express.static('./public'));
//app.use(express.static("./public"));
//app.use(bodyParser.json());
app.use(cors());

//response with select result from db
app.get("/data", function (req, res){
//    console.log("app.get results: "+results);
    res.json(results);
})
/*
//post request handler
app.post("/upload", function (req, res) {
	var title = "";
	var file_path = "";
	var file_name = "";
	var form = new formidable.IncommingForm();

	form.parse(req, function (err, fields, files){
		title = fields.title;
		file_path = fields.file_path;
		file_name = fields.file_name;
	});

	form.on('end', function (fields, files) {
		for(var i=0; i < this.openedFiles.length; i++) {}
	});
});
*/
app.listen(3000);
console.log("Listening on ....")

module.exports = app;
