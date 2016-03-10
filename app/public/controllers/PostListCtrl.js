(function() {
  angular.module("myBlogApp")
    .controller("PostListCtrl", ['Articles', PostListCtrl]);

  function PostListCtrl(Articles) {
    console.log("Hola");
    var me = this;

    me.articles = Articles.query();
  };
}());
