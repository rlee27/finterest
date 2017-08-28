# == Schema Information
#
# Table name: fins
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Fin < ApplicationRecord
  validates :board, :pin, presence: true

  belongs_to :board,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :board_id

  belongs_to :pin,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :pin_id
end
