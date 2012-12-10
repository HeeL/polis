ActiveAdmin.register About do
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'title_asc'
 
    index do 
     column :title
     column :description do |about|
       truncate(strip_tags(about.description), length: 800)  
     end

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :title
     f.input :description, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'Easy' }
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :description do
             truncate(strip_tags(about.description), length: 800)  
           end
         end
       end
end
