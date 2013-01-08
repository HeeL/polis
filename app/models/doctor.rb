class Doctor < ActiveRecord::Base
  attr_accessible :name, :job, :office_id, :status, :otpusk, :priem1, :priem2
  belongs_to :office
  has_many :reviews
  
  
end
