(function() {
  angular.module("myBlogApp")
    .controller("ListArticlesCtrl", ['Articles', ListArticlesCtrl]);

  function ListArticlesCtrl(Articles) {
    console.log("Hola");
    var me = this;

    me.articles = Articles.query();
  };
}());
