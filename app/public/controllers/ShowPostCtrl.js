(function() {
  angular.module("myBlogApp")
    .controller("ShowPostCtrl", ShowPostCtrl);

  ShowPostCtrl.$inject = ["$routeParams"];
  function ShowPostCtrl($routeParams) {
    var me = this;

    var posts = [
      {
        "postId": 0,
        "title": "My title",
        "content": "<p>Amet, aliquam id diam maecenas ultricies mi eget mauris pharetra.</p> <p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus? Lacus, luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo, laoreet. Viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna ac placerat vestibulum!</p>",
        "createdAt": new Date("01-01-2016"),
        "author": "Lacus Luctus"
      },
      {
        "postId": 1,
        "title": "My new title",
        "content": "<p>Amet, aliquam id diam maecenas ultricies mi eget mauris pharetra.</p> <p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus? Lacus, luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo, laoreet. Viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna ac placerat vestibulum!</p>",
        "createdAt": new Date("02-01-2016"),
        "author": "Lacus Luctus"
      }
    ];

    me.post = posts[$routeParams.postId];
    console.log(me.post);
  };
}());
