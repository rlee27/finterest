# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord
  validates :name, presence: true

  belongs_to :boards,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :topic_id

  belongs_to :pins,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :topic_id
end
