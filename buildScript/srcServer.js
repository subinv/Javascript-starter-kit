var express = require('express');
var path = require('path');

var port = 3000;
var app = express();
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error is ", err);
  } else {
    console.log('Connection opened on port ' + port);
  }
})
