(function() {
  var express = require('express');

  module.exports = function(Article) {

    var articleRouter = express.Router();
    var articles = require('../controllers/articles')(Article);

    articleRouter.route('/')
      .get(articles.all)
      .post(articles.create);
    articleRouter.route('/:articleId')
      .get(articles.show);

    articleRouter.param('articleId', articles.article);
    return articleRouter;
  };
}());
