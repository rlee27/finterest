# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  gender             :string
#  age                :string
#  name               :string           not null
#  location           :string
#  about              :text
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :session_token, :password_digest, :name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :image, default_url: "http://s3-us-east-2.amazonaws.com/finterest-dev/users/images/000/000/035/original/user_default.png?1504230438"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :boards,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :pins,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :author_id

  has_many :pinned,
    through: :fins,
    source: :pin

  has_many :fins,
    class_name: :Fin,
    primary_key: :id,
    foreign_key: :user_id

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.ensure_session_token
    self.save!
    self.session_token
  end
end
