class Api::FinsController < ApplicationController

  def create
    @fin = Fin.new(fin_params)
    if @fin.save
      @pin = Pin.find(@fin.pin_id)
      @author = @pin.author
      render 'api/pins/show'
    else
      render json: @fin.errors.full_messages, status: 422
    end
  end

  private

  def fin_params
    params.require(:fin).permit(:pin_id, :board_id, :user_id, :pin_description)
  end
end
