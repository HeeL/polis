class Office < ActiveRecord::Base
  attr_accessible :title, :adress, :contact, :photo
  has_many :doctors
  has_many :news
  has_attached_file :photo, :styles => { :medium => "940x240>" }

  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end
