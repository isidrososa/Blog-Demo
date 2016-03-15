(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Articles', ['$resource', Articles]);

  function Articles($resource) {
    return $resource('/api/articles/:articleId', {
      articleId: '@_id'
    });
  }
}());
