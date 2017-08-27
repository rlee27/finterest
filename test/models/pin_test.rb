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
#  topic_id    :integer
#

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
