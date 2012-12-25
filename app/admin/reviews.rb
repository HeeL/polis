ActiveAdmin.register Review do
  menu :if => proc{ can?(:manage, Review) }     
  controller.authorize_resource
  config.batch_actions = false
  config.clear_sidebar_sections!
  config.sort_order = 'created_at_desc'
  
  index do 
    column :status do |column|
      unless column.status.blank?
	t(column.status)
			end
    end
    column :office_id do |column|
      unless column.office_id.blank?
		Office.where(:id => column.office_id).first.title
			end
    end
    column :doctor_id do |column|
      unless column.doctor_id.blank?
		Doctor.where(:id => column.doctor_id).name.title
			end
    end
    column :description do |column|
      truncate(strip_tags(column.description), length: 200)
    end
    column :author
    column :contact
    column :created_at

    default_actions
  end

   form :html => { :enctype => "multipart/form-data" } do |f|
      f.inputs "Details" do
      f.input :status
    end
    f.buttons
   end
  
end


