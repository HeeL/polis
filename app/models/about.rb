class About < ActiveRecord::Base
  attr_accessible :description, :title, :category
  CATEGORIES = [ "About", "Usefull", "Vacancy" ]
  validates :title, :description, presence: true
  validates :category, inclusion: CATEGORIES
  
  define_index do
    indexes title
    indexes description
  end
  
end
