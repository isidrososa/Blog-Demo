var express = require('express'),
    serverStatic = require('serve-static'),
    cons = require('consolidate'),
    port = process.env.PORT || 9999;

var app = express();

app.engine('html', cons.swig);

app.set('views', __dirname + '/app/public/views');

app.set('view engine', 'html');

app.use(serverStatic(__dirname + '/app/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('listenig on port ' + port + '...');
});
