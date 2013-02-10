
class Article < ActiveRecord::Base
  attr_accessible :title, :photo, :date, :office_id, :description, :delete_photo
  belongs_to :office
  
  before_validation :clear_photo
  
  has_attached_file :photo, :styles => { :content => "134x134!" }
  
  def delete_photo=(value)
     @delete_photo = !value.to_i.zero?
   end

   def delete_photo
     !!@delete_photo
   end
   alias_method :delete_photo?, :delete_photo
   
   def clear_photo
     self.photo = nil if delete_photo? && !photo.dirty?
   end
  
  
  define_index do
    indexes title
    indexes description
  end
  
end
