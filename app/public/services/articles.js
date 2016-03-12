(function() {
  'use strict';

  angular
    .module('myBlogApp')
    .factory('Articles', Articles);

  function Articles() {
    var articles = [
      {
        'id': 0,
        'title': 'Cotton candy lollipop apple pie gingerbread',
        'abstract': 'Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes',
        'body': '<p>Gummies chocolate bar chocolate bar. Lollipop danish sweet roll. Marzipan liquorice sugar plum chocolate cake candy sweet danish candy canes.</p><p>Jelly-o donut apple pie candy chocolate tart jelly beans. Wafer apple pie cake sweet roll topping sugar plum sesame snaps chocolate gingerbread. Muffin sweet tootsie roll carrot cake. Tootsie roll dessert ice cream biscuit tiramisu pastry ice cream fruitcake. Cake muffin biscuit chocolate sugar plum marzipan chupa chups. Ice cream gingerbread marshmallow cake lollipop halvah.</p><p>Croissant jelly chocolate bar topping soufflé danish sweet roll bonbon. Candy topping cake cupcake powder candy canes topping. Powder gummies liquorice jelly lollipop jelly. Sweet soufflé bear claw. Cotton candy lollipop apple pie gingerbread. Jelly-o carrot cake candy canes dragée sweet.</p><p>Danish cake sugar plum. Halvah cookie sesame snaps oat cake wafer bonbon. Fruitcake lollipop marzipan biscuit biscuit.</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2015, 1, 14),
        likes: 0
      }, {
        'id': 1,
        'title': 'Toffee gummies fruitcake powder gummies pudding cupcake',
        'abstract': 'Muffin cake donut jujubes. Ice cream sweet roll candy canes chocolate cake. Pie soufflé halvah cotton candy gummies oat cake cheesecake sesame snaps.',
        'body': '<p>Toffee gummies fruitcake powder gummies pudding cupcake. Muffin cake donut jujubes. Ice cream sweet roll candy canes chocolate cake. Pie soufflé halvah cotton candy gummies oat cake cheesecake sesame snaps. Icing danish dragée carrot cake biscuit. Soufflé croissant cupcake lemon drops muffin cake wafer sugar plum.</p><p>Marshmallow wafer chocolate bar tootsie roll gingerbread tootsie roll. Tart chupa chups pie cupcake muffin toffee pastry muffin danish. Tootsie roll muffin liquorice. </p><p>Soufflé cheesecake soufflé oat cake oat cake. Ice cream lollipop chocolate bar apple pie caramels marzipan. Ice cream sweet roll marzipan candy canes soufflé</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2014, 11, 15),
        likes: 0
      }, {
        'id': 2,
        'title': 'Sugar plum pastry donut bear claw biscuit pudding',
        'abstract': 'Carrot cake jelly beans gummies carrot cake gingerbread jelly cheesecake halvah.',
        'body': '<p>Carrot cake jelly beans gummies carrot cake gingerbread jelly cheesecake halvah. Sugar plum pastry donut bear claw biscuit pudding tiramisu toffee. Toffee sesame snaps sweet roll brownie cupcake dessert jelly chocolate bar. Pudding chocolate cake pudding tiramisu jujubes tart ice cream pastry. </p><p>Caramels sweet roll danish jelly. Pastry jelly jujubes gummies chupa chups chocolate cake toffee muffin. Liquorice biscuit cheesecake icing topping bonbon lollipop danish. Gummies soufflé donut. Fruitcake tiramisu macaroon powder marshmallow topping toffee brownie chocolate. Chocolate bar fruitcake brownie tootsie roll. Sugar plum fruitcake toffee. Cupcake jelly beans lollipop cotton candy sweet roll chocolate jelly beans toffee. Cupcake marshmallow chupa chups bear claw danish chocolate cake.</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2016, 0, 1),
        likes: 0
      }, {
        'id': 3,
        'title': 'Candy canes macaroon gingerbread',
        'abstract': 'Candy canes macaroon gingerbread. Chocolate bar carrot cake marshmallow jelly beans donut lemon drops halvah. Chocolate apple pie sweet',
        'body': '<p>Candy canes macaroon gingerbread. Chocolate bar carrot cake marshmallow jelly beans donut lemon drops halvah. Chocolate apple pie sweet. Jelly-o cupcake gingerbread. Candy canes marzipan brownie marzipan tart chocolate. Marshmallow gummi bears topping croissant cotton candy apple pie. Cotton candy donut tiramisu chocolate cake gummies dessert.</p><p>Liquorice carrot cake jelly. Cookie wafer croissant tootsie roll marzipan cake marshmallow marzipan tart. Oat cake jelly beans sweet danish liquorice. Jujubes danish jelly beans sweet roll wafer. Jelly-o gummi bears danish icing wafer icing bonbon cake.</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2016, 1, 1),
        likes: 0
      }, {
        'id': 4,
        'title': 'Tart gummi bears cookie chocolate lollipop',
        'abstract': 'Tart gummi bears cookie chocolate lollipop. Gingerbread marzipan dragée dragée liquorice cake soufflé danish. ',
        'body': '<p>Tart gummi bears cookie chocolate lollipop. Gingerbread marzipan dragée dragée liquorice cake soufflé danish. Lollipop bonbon sesame snaps tiramisu tootsie roll. Brownie danish sweet. Marzipan cake halvah bear claw. Cupcake marshmallow candy canes. Pastry muffin tart cake danish cotton candy fruitcake gingerbread danish. Bear claw chocolate cake ice cream jujubes gummies carrot cake fruitcake croissant caramels. Sweet cheesecake gummi bears chupa chups sweet pastry. Candy marzipan sugar plum. Sesame snaps gingerbread brownie biscuit bonbon. Icing dragée pudding macaroon chocolate bar caramels icing. </p><p>Jelly beans gummies cupcake icing gingerbread. Dessert jujubes halvah gingerbread apple pie.</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2016, 0, 5),
        likes: 0
      }, {
        'id': 5,
        'title': 'Croissant jujubes marshmallow marzipan carrot cake',
        'abstract': 'Croissant jujubes marshmallow marzipan carrot cake. Bonbon jelly-o tart cupcake. Chocolate cake oat cake cake cake biscuit chocolate bar pudding.',
        'body': '<p>Chocolate cake apple pie donut tart. Oat cake bonbon cake sweet roll cookie croissant. Wafer muffin jelly biscuit caramels chocolate bar. Croissant sugar plum apple pie pastry topping dragée gummies liquorice marshmallow. Chocolate sweet roll tootsie roll soufflé carrot cake pie chocolate cake lollipop. </p><p>Gummi bears dragée sweet danish apple pie dessert. Lemon drops sweet powder pastry cake sweet roll. Chupa chups halvah sugar plum gingerbread caramels dragée candy cake. Caramels tiramisu candy canes tiramisu. Danish gummi bears jujubes. Croissant jujubes marshmallow marzipan carrot cake. Bonbon jelly-o tart cupcake. Chocolate cake oat cake cake cake biscuit chocolate bar pudding.</p>',
        author: 'Gummies Chocolate',
        createdAt: new Date(2016, 0, 19),
        likes: 0
      }
    ];
    return articles;
  };
})();
