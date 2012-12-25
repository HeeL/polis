ActiveAdmin.register AdminUser do  
  config.batch_actions = false  
  menu :if => proc{ can?(:manage, AdminUser) }     
  controller.authorize_resource 
    
  index do                            
    column :email   
    column :role                  
    column :current_sign_in_at        
    column :last_sign_in_at           
    column :sign_in_count             
    default_actions                   
  end                                 

  filter :email                       

  form do |f|                         
    f.inputs "Admin Details" do       
      f.input :email  
      f.input :role, :collection => ['superadmin', 'admin', 'manager']               
      f.input :password               
      f.input :password_confirmation  
    end                               
    f.buttons                         
  end   
  
  show do
    attributes_table do
      row :email
      row :role
      
      end
  end
                                
end                                   
