class Api::FollowsController < ApplicationController
  def create
    user = User.find(params[:id])
    user.follows.create(followable:follow)
  end
end
