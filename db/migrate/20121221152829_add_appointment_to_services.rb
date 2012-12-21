class AddAppointmentToServices < ActiveRecord::Migration
  def change
    add_column :services, :appointment, :boolean
  end
end
