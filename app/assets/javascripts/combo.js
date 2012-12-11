$(document).ready(function()
{
	$('.address__selector-label').click(function()
	{
		if ($(this).parent().hasClass('address-open'))
		{
			$(this).parent().removeClass('address-open');
		}
		else
		{
			$(this).parent().addClass('address-open');
		}		
		
		return false;
	});
	

});