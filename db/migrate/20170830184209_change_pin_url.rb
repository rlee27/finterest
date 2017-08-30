class ChangePinUrl < ActiveRecord::Migration[5.0]
  def change
    change_column_null :pins, :pin_url, true
  end
end
