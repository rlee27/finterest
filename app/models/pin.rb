# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  pin_url     :string           not null
#  author_id   :integer          not null
#  board_id    :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  topic_id    :integer
#

class Pin < ApplicationRecord
  validates :pin_url, :author, :board, presence: true

  has_attached_file :image, default_url: "pin-default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :board,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :board_id

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :topic,
    class_name: :Topic,
    primary_key: :id,
    foreign_key: :topic_id

  has_many :fins,
    class_name: :Fin,
    primary_key: :id,
    foreign_key: :pin_id,
    dependent: :destroy

  has_many :boards,
    through: :fins,
    source: :boards
end
