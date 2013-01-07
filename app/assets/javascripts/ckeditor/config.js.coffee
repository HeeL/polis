CKEDITOR.editorConfig = (config) ->
  config.language = 'en'
  config.toolbar_Pure = [
    { name: 'document',    items: [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
    '/',
    { name: 'styles',      items: [ 'Styles','Format','Font','FontSize' ] },
    { name: 'colors',      items: [ 'TextColor','BGColor' ] },
  ]
  config.toolbar = 'Pure'
  true