class CreateOffices < ActiveRecord::Migration
  def change
    create_table :offices do |t|
      t.string :title
      t.string :adress
      t.attachment :photo
      t.string :contact

      t.timestamps
    end
  end
end
