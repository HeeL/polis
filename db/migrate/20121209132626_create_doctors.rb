class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :job
      t.text :schedule
      t.integer :office_id

      t.timestamps
    end
  end
end
