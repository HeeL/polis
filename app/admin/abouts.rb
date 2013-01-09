ActiveAdmin.register About do
  menu :if => proc{ can?(:manage, About) }     
  controller.authorize_resource
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'title_asc'
 
    index do 
     column :title
     column :category do |column|
       t(column.category)
     end
     column :description do |about|
       truncate(strip_tags(about.description), length: 800)  
     end

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :title
     f.input :category, :as => :radio, :collection => Hash[About::CATEGORIES.map{|b| [t(b),b]}]
     f.input :description, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'Full' }
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :category do |row|
             t(row.category)
           end
           row :description do
             truncate(strip_tags(about.description), length: 800)  
           end
         end
       end
end
