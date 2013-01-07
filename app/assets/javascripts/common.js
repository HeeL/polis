

function control_in(control, text){ if (text == control.value) control.value = ''; }
function control_out(control, text){ if ('' == control.value) control.value = text; }

function doc_scroll_top(){

    if ( window.pageYOffset ) { return window.pageYOffset; }

    if ( document.documentElement && document.documentElement.scrollTop ) {return document.documentElement.scrollTop;}
    if ( document.body ) { return document.body.scrollTop; }

    return 0;
}

function show_popupresponse(popuptype)
{
	switch(popuptype)
	{
		// positive
		case 1: $("#review_status option[value='Positive']").attr('selected', 'selected');
				break;
		// negative
		case 2: $("#review_status option[value='Negative']").attr('selected', 'selected');
				break;
		// response
		case 3: $("#review_status option[value='Review']").attr('selected', 'selected');
				break;
	}
	
	
	
	$('#shadow').css('height', $('body').height() + 'px');
	$('#shadow').css('width', $('body').width() + 'px');
	$('#shadow').show();		
	
	$(".popupresponse").css('left', parseInt(($('body').width() - $(".popupresponse").width()) / 2) + 'px');
	$(".popupresponse").css('top', doc_scroll_top() + 100 + 'px');			
	$(".popupresponse").show();	
	
	
	$(".popupresponse__submit, #shadow, .popupresponse__close").click(function()
	{
		$('.popupresponse').hide();			
		
		$(".popupthankyou").css('left', parseInt(($('body').width() - $(".popupthankyou").width()) / 2) + 'px');
		$(".popupthankyou").css('top', doc_scroll_top() + 100 + 'px');			

		$('.popupthankyou').show();	
		
		$('.popupthankyou__close').click(function()
		{
			$('.popupthankyou').hide();	
			$('#shadow').hide();	
			
		});
		
		
	});
	
	// обработка checked
		function popup_check_doctor()
		{
			if ($(this).is(':checked'))
				$(this).parent().find('select').prop('disabled', false);
			else
				$(this).parent().find('select').prop('disabled', true);

		}

		$(".popupresponse__line input").click(popup_check_doctor);

	

	

}

function on_resize()
{		
	var dy = $(window).height() - $('.header').height() - $('.body').height() - $('.footer').height() - 60 ;
				
	if (dy > 0)
	{				
		$('.footer').css('position', 'fixed');
	}
	else
	{		
		$('.footer').css('position', 'static');
	}
}

function start_info_next()
{
	var elem = $('.start__menu-selected').next();
	
	if (elem.length == 0)
		start_info_hover($('.start__menu li')[0]);		
	else
		start_info_hover(elem);
					
	setTimeout('start_info_next();', 8000);
}

function start_info_hover(elem)
{
	if ($(elem).hasClass('start__menu-selected'))
		return false;
			
	$('.start__info-data-show').fadeOut(333, 0).removeClass('start__info-data-show');
	$('.start__menu-selected').removeClass('start__menu-selected');
	
	$(elem).addClass('start__menu-selected');
	$('.start__info-data-' + $(elem).attr('id')).fadeIn(333).addClass('start__info-data-show');
	
	$('.start__text-position').removeClass('start__text-position-sm-i2').removeClass('start__text-position-sm-i3');
	$('.start__text-position').addClass('start__text-position-' + $(elem).attr('id'));
}

function start_info_init()
{	
	$('.start__menu li').click(function()
	{
		start_info_hover($(this));

	});
	
	setTimeout('start_info_next();', 8000);
}


