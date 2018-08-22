var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
noInfo: true,
publicPath: config.output.publicPath
}));

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
