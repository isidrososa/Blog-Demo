(function() {
  angular.module("myBlogApp")
    .controller("ArticlesCtrl", ['$routeParams', '$location', 'Articles', ArticlesCtrl]);

  function ArticlesCtrl($routeParams, $location, Articles) {
    var me = this;
    var cont = Articles.length;
    me.articles = Articles;

    // Show article
    me.findArticleById = function() {
      for(var i = 0; i < me.articles.length; i++) {
        if(me.articles[i].id == $routeParams.articleId) {
          me.article = me.articles[i];
        }
      }
    };

    me.addLikes = function() {
      me.article.likes++;
    };

    // Create Article
    me.createArticle = function(isValid) {
      if (isValid) {
        var item = me.article;
        item.id = cont;
        cont++;
        item.createdAt = new Date();
        item.likes = 0;
        me.articles.push(item);
        $location.path('/articles/' + item.id);
      }
    };

    me.editorOptions = {
      'language': 'en',
      'uiColor': '#000000'
    };
  };
}());
