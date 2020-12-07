var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true}));

//Get Routes
app.get("/",function(req,res){
	res.render("home");
});

//about
app.get("/contact",function(req,res){
	res.render("contact");
});


//contact
app.get("/about",function(req,res){
	res.render("about");
});




//Server
app.listen(3000,function(){
	console.log("Azlan server started");
});