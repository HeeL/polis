class AddInfoToDoctors < ActiveRecord::Migration
  def change
    add_column :doctors, :text, :text
    add_attachment :doctors, :photo
  end
end
