class ChangeOffices < ActiveRecord::Migration
  def change
    remove_attachment :offices, :photo
    remove_column :offices, :contact
    add_column :offices, :map, :text
  end
end

