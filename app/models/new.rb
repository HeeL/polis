class New < ActiveRecord::Base
  attr_accessible :date, :title, :otdelenie, :description, :widget, :office_id
  belongs_to :office
end
