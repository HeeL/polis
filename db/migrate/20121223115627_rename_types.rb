class RenameTypes < ActiveRecord::Migration
  def change
    rename_column :reviews, :type, :status
  end
end
