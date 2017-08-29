class Api::CommentsController < ApplicationController


  def index
    @comments = Comment.all.includes(:user, :song)
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :song_id)
  end
end
