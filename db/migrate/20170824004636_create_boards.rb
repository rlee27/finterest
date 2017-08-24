class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :collaborator_id
      t.integer :topic_id
      t.integer :cover_id
      t.text :description

      t.timestamps
    end

    add_index :boards, :author_id
    add_index :boards, :collaborator_id
    add_index :boards, :topic_id
    add_index :boards, :cover_id
  end
end
