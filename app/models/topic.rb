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

  has_many :boards,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :topic_id

  has_many :pins,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :topic_id

  has_many :followers,
    through: :follows,
    source: :followable,
    source_type: "Follower"

  has_many :follows, as: :followable

end
