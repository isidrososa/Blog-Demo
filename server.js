var express = require('express'),
    bodyParser = require('body-parser'),
    serverStatic = require('serve-static'),
    path = require('path'),
    multer = require('multer'),
    cons = require('consolidate'),
    port = 9999;

var app = express();
app.engine('html', cons.swig);
app.set('views', __dirname + '/app/public/views');
app.set('view engine', 'html');
app.use(serverStatic(__dirname + '/app/public'));
app.get('/', function (req, res) {
  res.render('index');
});
app.listen(port);
console.log('listenig on port ' + port + '...');
