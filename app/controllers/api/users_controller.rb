class Api::UsersController < ApplicationController
  def create
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
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
