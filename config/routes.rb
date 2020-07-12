Rails.application.routes.draw do
  get 'messages/index'
  root "massages#index"
end
