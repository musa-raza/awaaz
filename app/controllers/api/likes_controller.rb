class Api::LikesController < ApplicationController

  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
      if @like.save
        render :show
      else
        render json: @like.errors.full_messages, status: 422
      end
  end

  def destroy
    @like = current_user.likes.find_by(song_id: params[:id])
    if @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:song_id, :user_id)
  end

end
