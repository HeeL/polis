class Office < ActiveRecord::Base
  attr_accessible :title, :adress, :map
  has_many :doctors
  has_many :articles
end
