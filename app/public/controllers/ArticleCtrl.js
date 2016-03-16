(function() {
  angular.module("myBlogApp")
    .controller("ArticlesCtrl", ['$routeParams', '$location', 'Articles', ArticlesCtrl]);

  function ArticlesCtrl($routeParams, $location, Articles) {
    var me = this;
    var cont = Articles.length;
    me.articles = Articles.query();
    console.log(me.articles);

    // Show article
    me.findArticleById = function() {
      Articles.get({
        articleId: $routeParams.articleId
      }, function(article) {
        me.article = article;
      });
    };

    me.addLikes = function() {
      me.article.likes++;
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
        var item = me.article;
        for(var i = 0; i < me.articles.length; i++) {
          if (item._id == me.articles[i]._id) {
            me.articles[i].title = item.title;
            me.articles[i].body = item.body;
            me.articles[i].abstract = item.abstract;
            $location.path('/articles/' + item._id);
          }
        }
      } else {
        me.submitted = true;
      }
    };

    // Delete article

    me.remove = function(article) {
      if (article) {
        for(var i in me.articles) {
          if (me.articles[i] === article) {
            me.articles.splice(i, 1);
            $location.path('/');
          }
        }
      }
    };

    me.editorOptions = {
      'language': 'en',
      'uiColor': '#000000'
    };
  }
}());
