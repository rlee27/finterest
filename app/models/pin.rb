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

  
end
