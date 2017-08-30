# == Schema Information
#
# Table name: pin_descriptions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  pin_id      :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PinDescription < ApplicationRecord
  validates :user, :pin, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :pin,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :pin_id
end
