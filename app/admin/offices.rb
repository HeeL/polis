ActiveAdmin.register Office do
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'title_asc'
  
         index do 
          column :title
          column :adress

          default_actions
        end

        form :html => { :enctype => "multipart/form-data" } do |f|
          f.inputs "Details" do
          f.input :title
          f.input :adress
          f.input :photo, :as => :file, :label => "picture"
          f.input :contact
        end
        f.buttons
       end

        show do
              attributes_table do
                row :title
                row :adress
                row :photo do
                  image_tag(office.photo.url, :size => "470x170")
                end
                row :contact
              end
            end
    end

