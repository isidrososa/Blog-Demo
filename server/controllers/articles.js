(function(){
  'use strict';

  var mongoose = require('mongoose'),
      _ = require('lodash');

  module.exports = function(Article) {
    return {

      article: function(req, res, next) {
        Article.findById(req.params.articleId, function(err, article) {
          if (err) return next(err);
          if (!article) return next(new Error('Faileed to load article ' + req.params.articleId));
          req.article = article;
          next();
        });
      },

      create: function(req, res) {
        var article = new Article(req.body);

        article.save(function(err) {
          if (err) {
            return res.status(500).json({
              error: 'Cannot save the article'
            });
          }

          res.json(article);
        });
      },

      update: function(req, res) {
        var article = req.article;

        article = _.extend(article, req.body);
        article.save(function(err) {
          if (err) {
            return res.status(500).json({
              error: 'Cannot update the article'
            });
          }
          res.json(article);
        });
      },

      show: function(req, res) {
        res.json(req.article);
      },

      all: function(req, res)
      {
        Article.find({}).sort('-createdAt').exec(function(err, articles) {
          if (err) {
            console.log(err);
            return res.status(500). json
            ({
              error: 'Cannot list the alumns'
            });
          }

          res.json(articles);
        });
      }
    };
  };}
)();
