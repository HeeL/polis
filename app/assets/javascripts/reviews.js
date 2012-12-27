
$(document).ready(function() {
	$('.doctors-select').live('change', function(event){
		el = event.target
		$('.doctors-select').each(function(k,v){
			if($(el).parent().attr('data-num') == $(v).parent().attr('data-num')) {
				return false;
			}
			$(v).find('option[value='+ $(el).find('option:selected').val() +']').remove()
		});
	});
	$('.doctors-select:last').attr('name', 'review[0][doctor_id]')
	
	$('#add_doctors').bind('click', function() {
		last_select = $('.doctors-select:last');
		if(last_select.find('option').length < 2) {
			$(this).hide();
			return false;
		}
		num = $('.doctors-select').length
		$('#doc').append('<div class="doc" data-num="'+ num +'">' + $('.doc:last').html() + '</div>');
		$('#doc').css('height', ($('.doctors-select').length - 1) * 30 + 50 + 'px')
		$('.doc').css('margin-top', '10px');
		$('.doctors-select:last').attr('name', 'review['+ num +'][doctor_id]')
		$('.doctors-select:last').change();
		$('.doctors-select:last option[value='+ last_select.val() +']').remove();
		if($('.doctors-select:last option').length == 1) {
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





