var express = require("express");
var bodyParser = require("body-parser");

var app = express();
require("../FriendFinder/app/routing/apiRoute")(app);
require("../FriendFinder/app/routing/htmlRoute")(app);


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function(){

  console.log("connected to " + PORT);
})


