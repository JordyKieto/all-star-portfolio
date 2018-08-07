var express = require("express");
var app = express();

app.use(express.static('static'))

app.server = app.listen(process.env.PORT || 5000, ()=> console.log('Listening on...'+ app.server.address().port) )

