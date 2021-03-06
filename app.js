var express = require('express');
var app = express();
require('dotenv').config();

console.log(process.env.PORT);
var port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port, function() {
	console.log('Server started on port ' + port);
});
