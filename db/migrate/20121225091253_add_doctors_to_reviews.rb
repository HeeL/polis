class AddDoctorsToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :doctors, :string
  end
end
