

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
  
  $("#shadow, .popupresponse__close").click(function()
  {
    $('.popupresponse').hide();     
    
    $(".popupthankyou").css('left', parseInt(($('body').width() - $(".popupthankyou").width()) / 2) + 'px');
    $(".popupthankyou").css('top', doc_scroll_top() + 100 + 'px');      

    $('#shadow').hide();
    $('.popupthankyou').hide(); 
      
    });
    
  function valid_item(item, default_text){
    item = $('#'+item);
    if(item.val() == default_text || item.val() == '') {
      item.addClass('error-border');
      return false;
    }
    else {
      item.removeClass('error-border');
      return true
    }
  }

  function valid_feedback(){
    var errors = 0
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var intRegex = /^[0-9]+$/;
    contact_field = $('#review_contact').val();
    if (!valid_item('review_author', 'Введите Ваше имя...')){
      errors++;
      $('#feedback_error').text('Представьтесь, пожалуйста:');
    }
    if (!valid_item('review_contact', 'e-mail или номер телефона')){
      errors++;
      $('#feedback_error').text('Заполните, пожалуйста, контактную информацию:');
    }
    else if (!contact_field.match(emailRegex) && !contact_field.match(intRegex)){
      errors++;
      $('#feedback_error').text('Необходимо указать e-mail или номер телефона');
      $('#review_contact').addClass('error-border');
    }
    if(errors == 0) {
      $('#feedback_error').text('');
    }
    if (!valid_item('review_description', 'Ваш отзыв')){
      errors++;
      $('#feedback_error_description').text('Напишите Ваш отзыв:');
    }
    else {
      $('#feedback_error_description').text('')
    }
    if (errors >= 2) {
      $('#feedback_error').text('Заполните все поля, пожалуйста:');
    }
    return errors == 0;
  }

  
  $(".popupresponse__submit").click(function(){
    if(!valid_feedback()) {
      return false;
    }
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

  
};



function start_info_next()
{
  var elem = $('.start__menu-selected').next();
  
  if (elem.length == 0)
    start_info_hover($('.start__menu li')[0]);    
  else
    start_info_hover(elem);
          
  setTimeout('start_info_next();', 12000);
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


