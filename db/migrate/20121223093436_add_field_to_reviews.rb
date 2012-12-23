class AddFieldToReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :type
    add_column :reviews, :type, :string
    
  end
end
