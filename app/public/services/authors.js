(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Authors', ['$resource', Authors]);

  function Authors($resource) {
    var author = $resource("http://jsonplaceholder.typicode.com/authors/:id", {id: '@_id'});
    return author;
  };
})();
