class RemovePinThumbnailCol < ActiveRecord::Migration[5.0]
  def change
    remove_column :pins, :thumbnail_file_name, :string
    remove_column :pins, :thumbnail_content_type, :string
    remove_column :pins, :thumbnail_file_size, :integer
    remove_column :pins, :thumbnail_updated_at, :datetime
  end
end
