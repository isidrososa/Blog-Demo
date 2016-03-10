(function() {
  angular.module("myBlogApp")
    .controller("ShowPostCtrl", ['$routeParams', 'Articles', ShowPostCtrl]);

  function ShowPostCtrl($routeParams, Articles) {
    var me = this;

    me.article = Articles.get({
      id: $routeParams.postId
    });

    console.log(me.article);
  };
}());
