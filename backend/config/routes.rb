Rails.application.routes.draw do
  root to: "static#home"
  get :logged_in, to: 'sessions#logged_in'
  # get :restaurants, to: 'restaurants#search'
  resources :sessions, only: [:index, :create]
  resources :reviews
  resources :users
  # resources :restaurants
  resources :registrations, only: [:index, :create]
  delete :logout, to: 'sessions#logout'
end
