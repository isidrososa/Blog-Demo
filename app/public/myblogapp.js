(function() {
  'use strict';
  var app = angular.module("myBlogApp", ["ngRoute", "ngResource"]);

  app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/public/views/partials/list.html",
        controller: "PostListCtrl as posts"
      })
      .when("/posts/:postId", {
        templateUrl: "/public/views/partials/show.html",
        controller: "ShowPostCtrl as post"
      });
  }]);
}());
