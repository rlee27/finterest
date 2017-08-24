# == Schema Information
#
# Table name: boards
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  author_id       :integer          not null
#  collaborator_id :integer
#  topic_id        :integer
#  cover_id        :integer
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :author_id, presence: true

  
end
