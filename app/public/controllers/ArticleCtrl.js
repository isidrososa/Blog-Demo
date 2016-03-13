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
    me.submitted = false;
    me.createArticle = function(isValid, form) {
      console.log(form);
      if (isValid) {
        var item = me.article;
        item.id = cont;
        item.createdAt = new Date();
        item.likes = 0;
        me.articles.push(item);
        $location.path('/articles/' + item.id);
        cont++;
      } else {
        me.submitted = true;
      }
    };

    // Edit article
    me.editArticle = function(isValid) {
      if (isValid) {
        var item = me.article;
        for(var i = 0; i < me.articles.length; i++) {
          if (item.id == me.articles[i].id) {
            me.articles[i].title = item.title;
            me.articles[i].body = item.body;
            me.articles[i].abstract = item.abstract;
            $location.path('/articles/' + item.id);
          }
        }
      } else {
        me.submitted = true;
      }
    };

    me.editorOptions = {
      'language': 'en',
      'uiColor': '#000000'
    };
  };
}());
