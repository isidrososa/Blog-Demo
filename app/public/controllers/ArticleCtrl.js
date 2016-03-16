(function() {
  angular.module("myBlogApp")
    .controller("ArticlesCtrl", ['$routeParams', '$location', 'Articles', ArticlesCtrl]);

  function ArticlesCtrl($routeParams, $location, Articles) {
    var me = this;

    me.find = function() {
      Articles.query(function(articles) {
        me.articles = articles;
      });
    };

    // Show article
    me.findArticleById = function() {
      Articles.get({
        articleId: $routeParams.articleId
      }, function(article) {
        me.article = article;
      });
    };

    me.addLikes = function() {
      var article = me.article;
      article.likes = me.article.likes+=1;
      article.$update();
    };

    // Create Article
    me.submitted = false;
    me.createArticle = function(isValid) {
      if (isValid) {
        var item = new Articles(me.article);
        item.$save(function(response) {
          $location.path('/articles/' + item._id);
        });
        me.article = {};
      } else {
        me.submitted = true;
      }
    };

    // Edit article
    me.editArticle = function(isValid) {
      if (isValid) {
        var article = me.article;

        if (!article.updated) {
          article.updated = [];
        }

        article.updated.push(new Date().getTime());

        article.$update(function() {
          $location.path('/articles/' + article._id);
        });
      } else {
        me.submitted = true;
      }
    };

    // Delete article
    me.remove = function(article) {
      if (article) {
        article.$remove(function(response) {
          for(var i in me.articles) {
            if (me.articles[i] === article) {
              me.articles.splice(i, 1);
            }
          }
          $location.path('/');
        });
      } else {
        me.article.$remove(function(response) {
          $location.path('/');
        });
      }
    };

    me.editorOptions = {
      'language': 'en',
      'uiColor': '#000000'
    };
  }
}());
