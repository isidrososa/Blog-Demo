(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Articles', ['$resource', Articles]);

  function Articles($resource) {
    var article = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: '@_id'});
    return article;
  };
})();
