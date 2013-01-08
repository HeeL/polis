ActiveAdmin.register Doctor do
  menu :if => proc{ can?(:manage, Doctor) }     
  controller.authorize_resource
  config.batch_actions = false
  filter :office_id, collection: proc { Office.all }, as: :select
  config.sort_order = 'name_asc'
 
    index do 
     column :name
     column :job
     column :schedule
     column :office_id do |column|
        Office.where(:id => column.office_id).first.title
      end

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :name
     f.input :job
     f.input :schedule, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'MyToolbar' }
     f.input :office_id, :as => :select, :collection => Office.all
   end
   f.buttons
  end

   show do
         attributes_table do
           row :name
           row :job
           row :schedule do |doctor|
             sanitize doctor.schedule
           end
           row :office_id do
             Office.where(:id => doctor.office_id).first.title
           end
         end
       end 
end
