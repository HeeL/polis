class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :author
      t.string :contact
      t.text :description
      t.integer :doctor_id
      t.integer :office_id
      t.boolean :type

      t.timestamps
    end
  end
end
