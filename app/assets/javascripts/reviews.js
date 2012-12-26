
$(document).ready(function() {
	$('.doctors').live('change', function(event){
		el = event.target
		$('.doctors').each(function(k,v){
			if($(el).parent().attr('data-num') == $(v).parent().attr('data-num')) {
				return false;
			}
			$(v).find('option[value='+ $(el).find('option:selected').val() +']').remove()
		});
	});

	$('#add_doctors').bind('click', function() {
		last_select = $('.doctors:last');
		if(last_select.find('option').length < 2) {
			$(this).hide();
			return false;
		}
		$('#doc').append('<div class="doc" data-num="'+ $('.doctors').length +'">' + $('.doc:last').html() + '</div>');
		$('.doctors:last option[value='+ last_select.val() +']').remove();
		if($('.doctors:last option').length == 1) {
			$(this).hide();
		}
		return false;
	});

	$(".response__menu-up").click(function(){
		show_popupresponse();
	});
	
	$(".response__menu-down").click(function(){
		show_popupresponse();
	});
	
	$(".response__menu-write").click(function(){
		show_popupresponse();
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




