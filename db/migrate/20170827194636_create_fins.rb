class CreateFins < ActiveRecord::Migration[5.0]
  def change
    create_table :fins do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false

      t.timestamps
    end

    add_index :fins, :board_id
    add_index :fins, :pin_id
  end
end
