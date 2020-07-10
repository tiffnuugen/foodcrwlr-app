Rails.application.routes.draw do
  root to: "static#home"
  get :logged_in, to: 'sessions#logged_in'
  post '/search', to: 'yelp#search'
  post '/details', to: 'yelp#display'
  resources :sessions, only: [:index, :create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show]
  resources :restaurants, only: [:index, :show, :create]
  resources :saved_restaurants, only: [:index, :show, :create, :destroy]
  resources :registrations, only: [:index, :create]
  delete :logout, to: 'sessions#logout'
end
