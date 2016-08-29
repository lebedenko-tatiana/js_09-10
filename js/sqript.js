

$(function() {
  $('select').styler();
});






$(function() {

  $('.menu li').hover(function() {
 
			$(this).find('.subMenu:first').css({visibility: "visible",display: "none"}).show(600);
		      }, 
		      function() {
			$(this).find('.subMenu:first').css({visibility: "hidden"});
		      }
  )

});
