(function() {
  'use strict';
  var app = angular.module("myBlogApp", ["ngRoute"]);
  app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/partials/list.html",
        controller: "PostListCtrl as posts"
      })
      .when("/posts/:postId", {
        templateUrl: "../views/partials/show.html",
        controller: "ShowPostCtrl as post"
      });
  }]);
}());
