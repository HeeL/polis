class Doctor < ActiveRecord::Base
  attr_accessible :name, :job, :office_id, :status, :otpusk, :priem1, :priem2, :text, :photo
  belongs_to :office
  has_many :reviews
  
  has_attached_file :photo, :styles => { :content => "134x134#" }
  
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
  
  
end
