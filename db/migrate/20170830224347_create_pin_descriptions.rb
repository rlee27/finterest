class CreatePinDescriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :pin_descriptions do |t|
      t.integer :user_id, null: false
      t.integer :pin_id, null: false
      t.text :description

      t.timestamps
    end

    add_index :pin_descriptions, :user_id
    add_index :pin_descriptions, :pin_id
  end
end
