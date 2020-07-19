class MessagesController < ApplicationController
  def index
  end

  def create
    @message = Message.new(message_params)
  end

end
