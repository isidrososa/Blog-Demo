(function() {
  angular.module("myBlogApp")
    .controller("ArticlesCtrl", ['$routeParams', '$location', 'Articles', ArticlesCtrl]);

  function ArticlesCtrl($routeParams, $location, Articles) {
    var me = this;
    var cont = Articles.length;
    me.articles = Articles;

    me.findArticle = function() {
      me.article = me.articles[$routeParams.articleId];
    };

    me.createArticle = function(isValid) {
      if (isValid) {
        var item = me.article;
        item.id = cont++;
        item.createdAt = new Date();
        me.articles.push(item);
        $location.path('/');
      }
    };
  };
}());
