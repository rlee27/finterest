class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  def submit
    @user = User.new(user_params)
    @user.valid?
    user_errors = []

    unless @user.errors[:email].empty?
      @user.errors[:email].each do |error|
        user_errors.push("Email #{error}")
      end
    end

    unless @user.errors[:password].empty?
      @user.errors[:password].each do |error|
        user_errors.push("Email #{error}")
      end
    end

    if user_errors.empty?
      render json: {}
    else
      render json: user_errors, status: 422
    end
  end

  def destroy
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      @user.destroy!
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
