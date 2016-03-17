(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Authors', Authors);

  function Authors() {
    var authors = [
      {
        'id': 0,
        username: 'macaroon0',
        name: 'Dessert Macaroon',
        description: 'Chocolate candy cookie jelly cupcake tiramisu marzipan gingerbread. Donut candy cotton candy jelly beans jelly topping sesame snaps liquorice.',
        photo: ''
      }, {
        'id': 1,
        username: 'chocolatebar',
        name: 'Chocolate Bar',
        description: 'Cheesecake marshmallow cupcake chocolate cake jelly beans liquorice.',
        photo: ''
      }
    ];
    return authors;
  }
}());
