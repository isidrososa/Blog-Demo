(function() {
  'use strict';

  angular.module('myBlogApp')
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "/views/partials/list.html",
          controller: "ArticlesCtrl as list"
        })
        .when("/articles/new", {
          templateUrl: "/views/partials/create.html",
          controller: "ArticlesCtrl as create"
        })
        .when("/articles/:articleId", {
          templateUrl: "/views/partials/show.html",
          controller: "ArticlesCtrl as show"
        })
        .when("/articles/:articleId/edit", {
          templateUrl: "/views/partials/edit.html",
          controller: "ArticlesCtrl as edit"
        })
        .when("/authors/:authorId", {
          templateUrl: "/views/partials/showByAuthor.html",
          controller: "AuthorsCtrl as author"
        })
        .otherwise({
          redirectTo: "/"
        });
    }]);
}());
