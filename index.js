const express = require('express')
const app = express()

var message = "";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send('hello');
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.listen(3000, () => console.log('Server running on port 3000'))
