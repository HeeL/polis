$(document).ready(function(){

  $('#sort_form').bind('ajax:success', function(data, response, xhr){
    $('#news_block').html(response);
  });
  
  $("#radio1").click(function(){
    $(".left__news-check").attr('checked', null);
	  $('#sort_form').submit();
  });

  $(".left__news-check").click(function(){
    $("#radio2").attr('checked', 'checked');
	  $('#sort_form').submit();
  });

  $("#radio2").click(function(){
    $(".left__news-check:first").attr('checked', 'checked');
	  $('#sort_form').submit();
  });

});
