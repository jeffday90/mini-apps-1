var express = require('express');
var app = express();

app.use(express.static('./client/dist'))

app.get('/', function(req, res){
  res.send('hello here');
});

app.listen(3000, console.log('Server is connected at 3000'));

