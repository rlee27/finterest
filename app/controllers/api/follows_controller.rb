class Api::FollowsController < ApplicationController

  def create
    @user = User.find(params[:id])

    follow_transaction = Follow.transaction do
      params[:topic_ids].each do |top_id|
        topic = Topic.find(top_id.to_i)
        @user.follows.create(followable: topic)
      end
    end

    if follow_transaction
      render '/api/sessions/show'
    else
      render json: ["Something went wrong"], status: 422
    end
  end

end
