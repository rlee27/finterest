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

require 'test_helper'

class FinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
