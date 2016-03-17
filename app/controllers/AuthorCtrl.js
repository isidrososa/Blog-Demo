(function() {
  angular.module("myBlogApp")
    .controller("AuthorsCtrl", ['$routeParams', '$location', 'Articles', 'Authors', AuthorsCtrl]);

  function AuthorsCtrl($routeParams, $location, Articles, Authors) {
    var me = this;
    me.authorIs = function() {

      for(var i = 0; i < Authors.length; i++) {
        if (Authors[i].id == $routeParams.authorId) {
          me.author = Authors[i];
        }
      }
    };
  }
}());
