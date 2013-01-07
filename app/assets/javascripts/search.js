$(document).ready(function(){

  $('#search').bind('ajax:success', function(data, response, xhr){
    $('.body__data').html(response);
  });
  
  $(".search__leftmenu-submit").click(function(){
	$('#search').submit();
  });

});
