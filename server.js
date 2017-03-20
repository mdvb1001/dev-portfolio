// Dependencies
var express = require("express");
var favicon = require("serve-favicon");
var path = require("path");

// Sets up the Express App
var app = express();

app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")))

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});
// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});