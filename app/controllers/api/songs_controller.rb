class Api::SongsController < ApplicationController

  def new
    @song = Song.new
  end

  def index
    @songs = Song.all.includes(:user)
  end

  def edit
    @song = Song.find_by(title: params[:title])
  end

  def create
    @song = Song.new(song_params)
    @song.user_id = current_user.id
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
  end

  private

  def song_params
    params.require(:song).permit(:title, :genre, :description, :audio, :image)
  end


end
