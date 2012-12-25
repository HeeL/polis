# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
jQuery ->

  doctors = $('#review_doctor_id').html()
  $('#review_office_id').change ->
    office = $('#review_office_id :selected').text()
    escaped_office = office.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1')
    options = $(doctors).filter("optgroup[label='#{escaped_office}']").html()
    if options
      $('#review_doctor_id').html(options)
      $('#review_doctor_id').parent().show()
    else
      $('#review_doctor_id').empty()
      $('#review_doctor_id').parent().hide()
