ActiveAdmin.register AdminUser do  
  config.batch_actions = false  
  menu :if => proc{ can?(:manage, AdminUser) }     
  controller.authorize_resource 
    
  index do                            
    column :email   
    column :role do |column|
      t(column.role)
      end              
    column :current_sign_in_at        
    column :last_sign_in_at           
    column :sign_in_count             
    default_actions                   
  end                                 

  filter :email                       

  form do |f|                         
    f.inputs "Admin Details" do       
      f.input :email  
      f.input :role, :collection => Hash[AdminUser::ROLES.map{|role| [t(role),role]}]               
      f.input :password               
      f.input :password_confirmation  
    end                               
    f.buttons                         
  end   
  
  show do
    attributes_table do
      row :email
      row :role do |row|
         t(row.role)
       end
      
      end
  end
                                
end                                   
