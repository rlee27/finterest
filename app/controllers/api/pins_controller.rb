class Api::PinsController < ApplicationController
  def index
    user = User.find(params[:id])
    @pins = user.pins
    if user
      render :index
    else
      render json:
      ["User does not exist,
        and does therefore does not have pins"], status: 404
    end
  end

  def show
    @pin = Pin.find(params[:id])
    if @pin
      render :show
    else
      render json: ["This pin does not exist"], status: 404
    end
  end

  def create
    debugger
    @pin = Pin.new(pin_params)
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors.full_messages, status: 404
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      render :show
    else
      render json: ["This pin does not exist"], status: 404
    end
  end

  private

  def pin_params
    params.require(:pin).permit(
    :pin_url, :author_id, :board_id, :topic_id, :description, :image)
  end
end
