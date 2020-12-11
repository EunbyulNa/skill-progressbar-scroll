$(document).ready(function() {

  window.onbeforeunload = function () {
   window.scrollTo(0,0);
};

$(window).scroll(function() {
  var sct = $(window).scrollTop();
  var skill = $('.skill_wrap').offset().top;

  console.log(sct);
  console.log(skill);

  if( sct  > skill - 500  ) {
    var skillMain = $('.skill_list > div');

    skillMain.each( function () {
      var progressWrap = $(this).find('.gauge');
      var progressBar = progressWrap.find('.bar');
      var progressText = progressWrap.next('.percent');
      var progressNum = progressText.attr('data-num');

      progressBar.animate( { 'width' : progressNum + '%'  }, 2000);


      setInterval(textNum, 100);
       function textNum() {
        var currentWidth = progressBar.width() / progressWrap.width() * 100;

        progressText.text(Math.ceil(currentWidth) + '%');
        //console.log(currentWidth);
      };
    });
  };
})

});
