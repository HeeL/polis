class Review < ActiveRecord::Base
  attr_accessible :author, :title, :contact, :description, :doctor_id, :office_id, :status, :check, :doctors
  belongs_to :doctor
  belongs_to :office
end
