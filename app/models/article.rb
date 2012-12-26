class Article < ActiveRecord::Base
  attr_accessible :title, :photo, :date, :office_id, :description
  belongs_to :office
  
  has_attached_file :photo, :styles => { :content => "134x134!" }
  
  define_index do
    indexes title
    indexes description
  end
  
end
