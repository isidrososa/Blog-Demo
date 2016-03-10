(function() {
  angular.module("myBlogApp")
    .controller("ShowArticleCtrl", ['$routeParams', 'Articles', ShowArticleCtrl]);

  function ShowArticleCtrl($routeParams, Articles) {
    var me = this;

    me.article = Articles.get({
      id: $routeParams.articleId
    });

    console.log(me.article);
  };
}());
