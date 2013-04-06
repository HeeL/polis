ActiveAdmin.register Office do
  menu :if => proc{ can?(:manage, Office) }     
  controller.authorize_resource
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'title_asc'
  
         index do 
          column :id
          column :title
          column :adress

          default_actions
        end

        form :html => { :enctype => "multipart/form-data" } do |f|
          f.inputs "Details" do
          f.input :title
          f.input :adress
        end
        f.buttons
       end

        show do
              attributes_table do
                row :title
                row :adress
              end
            end
    end

