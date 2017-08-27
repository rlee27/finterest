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
#

class Pin < ApplicationRecord
  validates :pin_url, :author, :board, presence: true

  belongs_to :board,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :board_id

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :fins,
    class_name: :Fin,
    primary_key: :id,
    foreign_key: :pin_id,
    dependent: :destroy

  has_many :boards,
    through: :fins,
    source: :boardxs
end
