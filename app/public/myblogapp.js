(function() {
  'use strict';
  var app = angular.module("myBlogApp", ["ngRoute", "ngResource"]);

  app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/public/views/partials/list.html",
        controller: "ListArticlesCtrl as list"
      })
      .when("/articles/:articleId", {
        templateUrl: "/public/views/partials/show.html",
        controller: "ShowArticleCtrl as show"
      });
  }]);
}());
