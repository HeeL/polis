class Service < ActiveRecord::Base
  attr_accessible :description, :title, :appointment
  
  define_index do
    indexes title
    indexes description
  end
  
  
end
