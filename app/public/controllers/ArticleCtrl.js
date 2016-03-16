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
      for(var i = 0; i < me.articles.length; i++) {
        if(me.articles[i]._id == $routeParams.articleId) {
          console.log(me.articles.length);
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
        item._id = cont;
        item.createdAt = new Date();
        item.likes = 0;
        me.articles.push(item);
        $location.path('/articles/' + item._id);
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
