Rails.application.routes.draw do
  root to: "static#home"
  get :logged_in, to: 'sessions#logged_in'
  post '/search', to: 'yelp_search_queries#search'
  resources :sessions, only: [:index, :create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show]
  resources :restaurants, only: [:index, :show, :create, :update, :destroy]
  resources :registrations, only: [:index, :create]
  delete :logout, to: 'sessions#logout'
end
