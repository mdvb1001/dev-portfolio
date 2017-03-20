// Dependencies
var express = require("express");
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('index.html');
});
// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});