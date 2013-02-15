ActiveAdmin.register Article do
  menu :if => proc{ can?(:manage, Article) }     
  controller.authorize_resource
  config.batch_actions = false
  filter :office_id, collection: proc { Office.all }, as: :select
  config.sort_order = 'title_asc'
 
    index do 
     column :title
     
     
     
     column :photo do |article|
        if article.photo?
          image_tag(article.photo.url(:content))
        else
          I18n.t('no_image')
        end
      end
     column :date
     column :office_id do |column|
       if column.office_id != nil && 'NULL'
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

   form :html => { :multipart => true } do |f|
     f.inputs do
     f.input :title
     f.input :photo, :as => :file, :hint => ( f.object.new_record? || !f.object.photo? ) ? nil : image_tag(f.object.photo.url(:content))
       unless f.object.new_record? || !f.object.photo?
     f.input :delete_photo, :as => :boolean, :label => I18n.t('destroy_image'), :wrapper_html => { :class => "important" }
      end
       
       
       
     f.input :date
     f.input :office_id, :as => :select, :collection => Office.all
     f.input :description, :as => :ckeditor, :label => false, :input_html => { :toolbar => 'Full' }
   end
   f.buttons
  end

   show do
         attributes_table do
           row :title
           row :photo do |article|
             if article.photo?
               image_tag(article.photo.url(:content))
             else
               nil
             end
           end
           row :date
           row :office_id
           row :description do |article|
             truncate(strip_tags(article.description), length: 500).html_safe
           end
       end  
     end
end
