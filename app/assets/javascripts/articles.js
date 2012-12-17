

$(document).ready(function(){

  $("#radio1").click(function(){
    $(".left__news-check").attr('checked', null);
//	$('ul.news').load('/articles', $("form").serializeArray())

  });

$(".left__news-check").click(function(){
    $("#radio2").attr('checked', 'checked');
//	$('ul.news').load('/articles', $("form").serializeArray())
  });

  $("#radio2").click(function(){
    $(".left__news-check:first").attr('checked', 'checked');
//	$('ul.news').load('/articles', $("form").serializeArray())
  });

  });

