(function() {
  'use strict';
  var app = angular.module("myBlogApp", ["ngRoute", "ngResource", "ngCkeditor", "ngSanitize"]);

  app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/public/views/partials/list.html",
        controller: "ArticlesCtrl as list"
      })
      .when("/articles/new", {
        templateUrl: "/public/views/partials/create.html",
        controller: "ArticlesCtrl as create"
      })
      .when("/articles/:articleId", {
        templateUrl: "/public/views/partials/show.html",
        controller: "ArticlesCtrl as show"
      })
      .when("/articles/:articleId/edit", {
        templateUrl: "/public/views/partials/edit.html",
        controller: "ArticlesCtrl as edit"
      });
  }]);
}());
