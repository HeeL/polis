class Ability
  include CanCan::Ability

  def initialize(user)
     user ||= AdminUser.new       
     case user.role      
       when "superadmin"
         can :manage, :all
       when "admin"
         can :manage, Article
         can :manage, Doctor
         can :manage, Review
       when "manager"
         can :manage, Office    
       end
   end
end
