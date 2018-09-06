//This is NOT for actual production use. This is just useful for hosting the minified production build
// for local debugging purposes.
var express = require('express');
var path = require('path');

var port = 3000;
var app = express();
var compiler = webpack(config);
import compression from 'compression';
/*eslint-disable no-console*/

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/users', function (req, res) {
  res.json([{
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane.doe@gmail.com"
    },
    {
      "id": 3,
      "firstName": "Jan",
      "lastName": "Doe",
      "email": "jan.doe@gmail.com"
    }
  ]);
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error is ", err);
  } else {
    console.log('Connection opened on port ' + port);
  }
})
