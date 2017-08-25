class Api::BoardsController < ApplicationController
  def index
    user = User.find(params[:id])
    @boards = user.boards
    render :index
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find(params[:userId])
    board_title = params[:boardTitle].split("-").join(" ")
    @board = user.boards.find_by(title: board_title)
    if @board
      render :show
    else
      render json: ["Board not found"], status: 404
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board
      @board.destroy
      render :show
    else
      render json: ["Board not found"], status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :author_id, :description)
  end
end
