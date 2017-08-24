class RemoveCollaboratorIdFromBoard < ActiveRecord::Migration[5.0]
  def change
    remove_column :boards, :collaborator_id
  end
end
