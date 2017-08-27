class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :pin_url, null: false
      t.integer :author_id, null: false
      t.integer :board_id, null: false
      t.text :description

      t.timestamps
    end

    add_index :pins, :author_id
    add_index :pins, :board_id
  end
end
