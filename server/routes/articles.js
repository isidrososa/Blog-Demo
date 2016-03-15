(function() {
  var express = require('express');

  module.exports = function(Article) {

    var articleRouter = express.Router();

    articleRouter.use('/:articleId', function(req, res, next) {
      Article.findById(req.params.articleId, function(err, article) {
        if (err) {
          res.status(500).send(err);
          console.log(err);
        } else if(article){
          req.article = article;
          next();
        } else {
          res.status(404).send('no article found ' + req.params.articleId);
        }
      });
    });

    articleRouter.route('/:articleId')
      .get(function(req, res) {
        res.json(req.article);
      });
    return articleRouter;
  };
}());
