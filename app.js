const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const nodeFetch = require('node-fetch');

const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.static('public')); //Express serves images, CSS files, and JavaScript files in a directory named public
app.use(bodyParser.urlencoded({extended: true}));

// New branch testing
app.get('/', function(req, res){
    res.render('index', parseJson());
});

function parseJson(){
    const fs = require("fs");
// Get content from file
    const contents = fs.readFileSync("configurations.json");
// Define to JSON type
    const jsonContent = JSON.parse(contents);
// Get Value from JSON
    console.log("test", jsonContent.navLogoText);
    return jsonContent;
}

http.createServer(app).listen(port, function(){

});

