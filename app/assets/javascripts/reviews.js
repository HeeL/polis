
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

	$(".response__menu-up, .i2, #blago").click(function(){
		show_popupresponse(1);
	});
	
	$(".response__menu-down, .i1, #yabida").click(function(){
		show_popupresponse(2);
	});
	
	$(".response__menu-write").click(function(){
		show_popupresponse(3);
	});
	
		
	});




