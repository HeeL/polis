class Office < ActiveRecord::Base
  attr_accessible :title, :adress, :map
  has_many :doctors
  has_many :articles
  has_many :reviews
  
  define_index do
    indexes title
  end
  
end
