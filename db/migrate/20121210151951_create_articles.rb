class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.attachment :photo
      t.date :date
      t.integer :office_id
      t.text :description

      t.timestamps
    end
  end
end
