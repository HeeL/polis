jQuery(function(){ 
  
  $("#radio1").click(function(){
    $(".left__news-check").attr('checked', null);
	//$('form').submit();
  });

$(".left__news-check").click(function(){
    $("#radio2").attr('checked', 'checked');
	//$('form').submit();
  });

  $("#radio2").click(function(){
    $(".left__news-check:first").attr('checked', 'checked');
	//$('form').submit();
  });

  });

