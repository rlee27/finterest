class Pin < ApplicationRecord
  validates :pin_url, :author, :board, presence: true

  
end
