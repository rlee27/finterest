class AddTopicIdToPins < ActiveRecord::Migration[5.0]
  def change
    add_column :pins, :topic_id, :integer
    add_index :pins, :topic_id
  end
end
