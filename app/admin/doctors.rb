ActiveAdmin.register Doctor do
  menu :if => proc{ can?(:manage, Doctor) }     
  controller.authorize_resource
  config.batch_actions = false
  filter :office_id, collection: proc { Office.all }, as: :select
  config.sort_order = 'name_asc'
 
    index do 
     column :name
     column :job
     column :status
     column :otpusk
     column :priem1
     column :priem2          
     column :office_id do |column|
       if column.office_id != nil && 'NULL'
          Office.where(:id => column.office_id).first.title
        else
          nil
        end
      end

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :name
     f.input :job
     f.input :photo, :as => :file, :hint => ( f.object.new_record? || !f.object.photo? ) ? nil : image_tag(f.object.photo.url(:content))
       unless f.object.new_record? || !f.object.photo?
     f.input :delete_photo, :as => :boolean, :label => I18n.t('destroy_image'), :wrapper_html => { :class => "important" }
      end
     f.input :status
     f.input :otpusk
     f.input :priem1
     f.input :priem2
     f.input :text
     f.input :office_id, :as => :select, :collection => Office.all
   end
   f.buttons
  end

   show do
         attributes_table do
           row :name
           row :job
           row :status
           row :otpusk
           row :priem1
           row :priem2
           row :office_id 
           row :text do |row|
             truncate(strip_tags(row.text), length: 500).html_safe
           end
         end
       end 
end
