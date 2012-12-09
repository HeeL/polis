class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :title
      t.string :otdelenie
      t.date :date
      t.text :description
      t.boolean :widget

      t.timestamps
    end
  end
end
