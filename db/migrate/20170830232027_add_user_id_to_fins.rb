class AddUserIdToFins < ActiveRecord::Migration[5.0]
  def change
    add_column :fins, :user_id, :integer
    change_column_null :fins, :user_id, false
    add_index :fins, :user_id
  end
end
