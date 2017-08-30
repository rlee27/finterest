class RemoveNullFromPinUrl < ActiveRecord::Migration[5.0]
  def change
    change_column :pins, :pin_url, :string
  end
end
