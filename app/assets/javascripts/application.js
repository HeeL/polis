// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require_self
//= require jquery_ujs
//= require ckeditor/init
//= require_tree .


$(document).ready(function()
{
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 800){
			$(".up-link").show();
		} else {
			$(".up-link").hide();
		}		
	}); 
	
	// Наверх (скролл)
	$(".up-link").click(function(){
		$("html, body").animate({scrollTop:0}, "slow");
		
		return false;
	});
	
	
	start_info_init();
	
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) { 
		$('.footer__search-input').blur();
		$('.popupresponse, #shadow, .popupthankyou').hide();
		 }   // esc
	});
});

$(document).ready(function()
{
	$("#slider ul").carouFredSel({
		auto 			: {pauseDuration: 5000}, 
   	pagination  : "#s-pagination"
	});
});

$(document).ready(function()
{
	$("#main-menu li a").hover(
		function(){
			$(this).parent().siblings("li").find("a").addClass("no-active");
		},
		function(){
			$(this).parent().siblings("li").find("a").removeClass("no-active");
		}
	)
	
	// плавающее левое меню
 	var lMenu = $('#scroll-menu'),
	lMenuPos = lMenu.offset();
	
	var $lMenu = $('#scroll-menu');
	
	$(window).scroll(function(){
		if($(this).scrollTop() > lMenuPos.top){
			$lMenu.css({"top": $(this).scrollTop() - lMenuPos.top});
		} else if($(this).scrollTop() <= lMenuPos.top){
			$lMenu.css({"top": "0"});
		}		
	});
	
	// Появление скролла "Наверх"
	
	
	

	
	
});
