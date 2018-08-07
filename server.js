var express = require("express");
const path = require('path')
var app = express();

app.use(express.static('static'))

app.listen(process.env.PORT || 5000, ()=> console.log('Listening on...') )

