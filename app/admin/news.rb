ActiveAdmin.register New do
  config.batch_actions = false
  filter :office_id, collection: proc { Office.all }, as: :select
  config.sort_order = 'title_asc'
   
    index do 
     column :title
     column :date
     column :description
     column :widget
     column :office_id do |column|
       Office.where(:id => column).first.title
     end

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs "Details" do
     f.input :title
     f.input :date
     f.input :description
     f.input :widget
     f.input :office_id, :as => :select, :collection => Office.all
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :date
           row :description
           row :widget
           row :office_id do
             Office.where(:id => new.office_id).first.title
           end
         end
       end
end
