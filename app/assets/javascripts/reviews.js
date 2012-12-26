
$(document).ready(function() {
		
	$('#add_doctors').bind('click', function() {
		last_select = $('.doctors:last');
		if(last_select.find('option').length < 2) {
			$(this).hide();
			return false;
		}
		$('#doc').append('<div class="doc">' + $('.doc:last').html() + '</div>');
		$('.doctors:last option[value='+ last_select.val() +']').remove();
		if($('.doctors:last option').length == 1) {
			$(this).hide();
		}
		return false;
	});

	$(".response__menu-up").click(function(){
		show_popupresponse(1);
	});
	
	$(".response__menu-down").click(function(){
		show_popupresponse(2);
	});
	
	$(".response__menu-write").click(function(){
		show_popupresponse(3);
	});
	
	$(".i1").click(function(){
		show_popupresponse();
	});
	
	$(".i2").click(function(){
		show_popupresponse();
	});
	
	$("#blago").click(function(){
		show_popupresponse();
	});
	
	$("#yabida").click(function(){
		show_popupresponse();
	});
		
		
	});




