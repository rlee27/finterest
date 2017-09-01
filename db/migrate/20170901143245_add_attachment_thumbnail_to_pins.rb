class AddAttachmentThumbnailToPins < ActiveRecord::Migration
  def self.up
    change_table :pins do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :pins, :thumbnail
  end
end
