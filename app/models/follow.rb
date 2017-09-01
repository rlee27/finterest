# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  followable_type :string
#  followable_id   :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :integer          not null
#

class Follow < ApplicationRecord
  belongs_to :followable, polymorphic: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
