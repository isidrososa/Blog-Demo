(function() {
  angular.module('myBlogApp')
    .controller('CreateArticleCtrl', ['Articles', CreateArticleCtrl]);

  function CreateArticleCtrl(Articles) {
    var me = this;

    me.createArticle = function(isValid) {
      if(isValid) {
        var article = me.article;
        console.log(me.article);
      }
    };
  }
}());
