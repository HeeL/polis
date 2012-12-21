class AddCategoryToAbouts < ActiveRecord::Migration
  def change
    add_column :abouts, :category, :string
  end
end
