# == Schema Information
#
# Table name: fins
#
#  id              :integer          not null, primary key
#  board_id        :integer          not null
#  pin_id          :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  pin_description :text
#  user_id         :integer          not null
#

class Fin < ApplicationRecord
  validates :board, :pin, :user, presence: true
  validates :pin, uniqueness: { scope: :board,
    message: "already exists on the board" }

  belongs_to :board,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :board_id

  belongs_to :pin,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :pin_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
