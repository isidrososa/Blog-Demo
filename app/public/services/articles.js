(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Articles', Articles);

  function Articles() {
    var article = [
      {
        'id': 0,
        'title': 'Cotton candy lollipop apple pie gingerbread',
        'abstract': 'Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes',
        'body': 'Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes. Jelly-o donut apple pie candy chocolate tart jelly beans. Wafer apple pie cake sweet roll topping sugar plum sesame snaps chocolate gingerbread. Muffin sweet tootsie roll carrot cake. Tootsie roll dessert ice cream biscuit tiramisu pastry ice cream fruitcake. Cake muffin biscuit chocolate sugar plum marzipan chupa chups. Ice cream gingerbread marshmallow cake lollipop halvah.Croissant jelly chocolate bar topping soufflé danish sweet roll bonbon. Candy topping cake cupcake powder candy canes topping. Powder gummies liquorice jelly lollipop jelly. Sweet soufflé bear claw. Cotton candy lollipop apple pie gingerbread. Jelly-o carrot cake candy canes dragée sweet. Danish cake sugar plum. Halvah cookie sesame snaps oat cake wafer bonbon. Fruitcake lollipop marzipan biscuit biscuit.',
        author: 'Gummies Chocolate',
        createdAt: new Date(12-4-2015)
      }, {
        'id': 1,
        'title': 'Cotton candy lollipop apple pie gingerbread',
        'abstract': 'Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes',
        'body': 'Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes. Jelly-o donut apple pie candy chocolate tart jelly beans. Wafer apple pie cake sweet roll topping sugar plum sesame snaps chocolate gingerbread. Muffin sweet tootsie roll carrot cake. Tootsie roll dessert ice cream biscuit tiramisu pastry ice cream fruitcake. Cake muffin biscuit chocolate sugar plum marzipan chupa chups. Ice cream gingerbread marshmallow cake lollipop halvah.Croissant jelly chocolate bar topping soufflé danish sweet roll bonbon. Candy topping cake cupcake powder candy canes topping. Powder gummies liquorice jelly lollipop jelly. Sweet soufflé bear claw. Cotton candy lollipop apple pie gingerbread. Jelly-o carrot cake candy canes dragée sweet. Danish cake sugar plum. Halvah cookie sesame snaps oat cake wafer bonbon. Fruitcake lollipop marzipan biscuit biscuit.',
        author: 'Gummies Chocolate',
        createdAt: new Date(12-4-2015)
      }];
    return article;
  };
})();
