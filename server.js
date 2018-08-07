var express = require("express");
const path = require('path')
var app = express();

app.use(express.static('static'))

app.listen(5000, ()=> console.log('Listening on 5000') )

