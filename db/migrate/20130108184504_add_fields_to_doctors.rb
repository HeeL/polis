class AddFieldsToDoctors < ActiveRecord::Migration
  def change
    add_column :doctors, :status, :boolean
    add_column :doctors, :otpusk, :string
    add_column :doctors, :priem1, :string
    add_column :doctors, :priem2, :string
    remove_column :doctors, :schedule
  end
end
