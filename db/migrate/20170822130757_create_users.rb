class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :gender
      t.string :age
      t.string :name, null: false
      t.string :location
      t.text :about
      t.string :website

      t.timestamps
    end
  end
end
