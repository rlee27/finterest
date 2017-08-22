class RenameTableName < ActiveRecord::Migration[5.0]
  def change
    rename_table :users, :user
  end
end
