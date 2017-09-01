class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.references :followable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
