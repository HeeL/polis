ActiveAdmin.register Article do
  menu :if => proc{ can?(:manage, Article) }     
  controller.authorize_resource
  config.batch_actions = false
  filter :office_id, collection: proc { Office.all }, as: :select
  config.sort_order = 'title_asc'
 
    index do 
     column :title
     column :photo do |column|
       image_tag(column.photo.url(:content))
      end
     column :date
     column :office_id do |column|
       
       if column.office_id != nil
         Office.where(:id => column.office_id).first.title
       else
         nil
       end
      
      end
      
    column :description do |column|
      truncate(strip_tags(column.description), length: 100)
    end
      

     default_actions
   end

   form :html => { :enctype => "multipart/form-data" } do |f|
     f.inputs do
     f.input :title
     f.input :photo, :as => :file
     f.input :date
     f.input :office_id, :as => :select, :collection => Office.all
     f.input :description, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'Easy' }
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :photo do |article|
             image_tag(article.photo.url(:content))
           end
           row :date
           row :office_id do |article|
              if article.office_id != nil
                Office.where(:id => article.office_id).first.title
              else
                nil
              end
           end
           row :description do |article|
             truncate(strip_tags(article.description), length: 500)
           end
       end  
     end
end
