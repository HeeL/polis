class AddForeignkeyToNews < ActiveRecord::Migration
  def change
    add_column :news, :office_id, :integer
    remove_column :news, :otdelenie
  end
end
