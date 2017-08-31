class RemovePinDescriptionTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :pin_descriptions
    add_column :fins, :pin_description, :text
  end
end
