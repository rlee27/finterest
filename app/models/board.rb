# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  topic_id    :integer
#  cover_id    :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :author, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  # belongs_to :topic,
  #   class_name: :Topic,
  #   primary_key: :id,
  #   foreign_key: :topic_id

  has_many :fins,
    class_name: :Fin,
    primary_key: :id,
    foreign_key: :board_id,
    dependent: :destroy

  has_many :pins,
    through: :fins,
    source: :pin
end
