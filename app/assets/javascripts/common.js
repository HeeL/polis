function control_in(control, text){ if (text == control.value) control.value = ''; }
function control_out(control, text){ if ('' == control.value) control.value = text; }

function doc_scroll_top(){

    if ( window.pageYOffset ) { return window.pageYOffset; }

    if ( document.documentElement && document.documentElement.scrollTop ) {return document.documentElement.scrollTop;}
    if ( document.body ) { return document.body.scrollTop; }

    return 0;
}

function show_popupresponse()
{
	$('#shadow').css('height', $('body').height() + 'px');
	$('#shadow').css('width', $('body').width() + 'px');
	$('#shadow').show();		
	
	$(".popupresponse").css('left', parseInt(($('body').width() - $(".popupresponse").width()) / 2) + 'px');
	$(".popupresponse").css('top', doc_scroll_top() + 100 + 'px');			
	$(".popupresponse").show();	
	
	$(".popupresponse__submit, #shadow, .popupresponse__close").click(function()
	{
		$('.popupresponse').hide();	
		$('#shadow').hide();	

	});
	
	$(".popupresponse__line-add").click(function()
	{
		$(".popupresponse__right").append('<div class="popupresponse__line clearfix"><input type="checkbox" /><label>Врач</label><select><option>Борменталь Игорь Борисович</option></select></div>');
		return false;
	});

}

function on_resize()
{		
	var dy = 0;
	if($('#body').size() > 0)
	{
		dy = $(window).height() - $('.header').height() - $('.body').height() - $('.footer').height() - 60 ;
	}
	else
	{		
		dy = $(window).height() - $('.header').height() - $('.home').height() - $('.footer').height() - 60;
	}
				
	if (dy > 0)
	{				
		$('.footer').css('position', 'fixed');
	}
	else
	{		
		$('.footer').css('position', 'static');
	}
}

$(document).ready(function()
{
	$(window).bind('resize', on_resize);
	on_resize();
});