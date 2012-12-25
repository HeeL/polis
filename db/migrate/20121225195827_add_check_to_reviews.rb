class AddCheckToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :check, :boolean
  end
end
