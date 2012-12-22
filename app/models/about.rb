class About < ActiveRecord::Base
  attr_accessible :description, :title, :category
  CATEGORIES = [ "About", "Usefull" ]
  validates :title, :description, presence: true
  validates :category, inclusion: CATEGORIES
end
