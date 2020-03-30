Rails.application.routes.draw do
  root to: "static#home"
  get :logged_in, to: 'sessions#logged_in'
  get '/yelp', to: 'yelp#search'
  resources :sessions, only: [:index, :create]
  resources :reviews
  resources :users
  resources :restaurants
  resources :registrations, only: [:index, :create]
  delete :logout, to: 'sessions#logout'
end
