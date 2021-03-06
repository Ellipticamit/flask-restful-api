var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set the template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

// listen to port 3000
app.listen(3000);
console.log('You are listening to port 3000');
