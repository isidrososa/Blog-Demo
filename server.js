var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    serverStatic = require('serve-static'),
    path = require('path'),
    cons = require('consolidate'),

    port = process.env.PORT || 9999;

var app = express();

mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('blog db opened');
});

var Article = require('./server/models/article');

app.engine('html', cons.swig);

app.set('views', __dirname + '/app/public/views');

app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(serverStatic(__dirname + '/app/public'));

var articleRouter = require('./server/routes/articles')(Article);

app.use('/api/articles', articleRouter);

app.get('*', function (req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('listenig on port ' + port + '...');
});
