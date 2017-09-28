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
    @pin = Pin.new(pin_params)

    pin_transaction = Pin.transaction do
      @pin.save
      fin = Fin.new(pin_id: @pin.id,
                    board_id: @pin.board_id,
                    user_id: current_user.id,
                    pin_description: @pin.description)
      fin.save
    end

    if pin_transaction
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
    if @pin
      board = Board.find(params[:board_id])
      board.pin_ids.delete(params[:id])
      render :show
    else
      render json: ["This pin does not exist"], status: 404
    end
  end

  def home_pins
    @user = User.find(params[:userId])
    if @user
      render :home_pins
    else
      render json: ["Cannot find user"], status: 404
    end
  end

  private

  def pin_params
    params.require(:pin).permit(
    :pin_url, :author_id, :board_id, :topic_id, :description, :image)
  end
end
