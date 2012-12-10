class Doctor < ActiveRecord::Base
  attr_accessible :name, :job, :schedule, :office_id
  belongs_to :office
end
