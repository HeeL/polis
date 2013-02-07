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
	
	$('.address__selector-list a').click(function()
	{
		$('.address__selector-list li').removeClass('address__selector-selected');
		$(this).parent().addClass('address__selector-selected');
		$('.address__selector-label').html($(this).html());
		$('.address__selector').removeClass('address-open');	
	});
});