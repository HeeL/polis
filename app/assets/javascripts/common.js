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
	
	$(".popupresponse__submit, #shadow").click(function()
	{
		$('.popupresponse').hide();	
		$('#shadow').hide();	
	});

}