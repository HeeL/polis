ActiveAdmin.register Service do
  menu :if => proc{ can?(:manage, Service) }     
  controller.authorize_resource
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'title_asc'
 
    index do 
     column :title
     column :description do |service|
       truncate(strip_tags(service.description), length: 800)  
     end
     column :appointment

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :title
     f.input :description, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'Full' }
     f.input :appointment
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :description do |row|
             sanitize row.description
           end
           row :appointment
         end
       end
end
