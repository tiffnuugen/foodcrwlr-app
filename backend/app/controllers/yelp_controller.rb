class YelpController < ApplicationController
  def search
    res = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.params['categories'] = 'food,restaurants'
      req.params['term'] = params[:term]
      req.params['location'] = params[:location]
    end
    search_results = JSON.parse(res.body)
    render json: search_results
  end

  def hot_and_new
    res = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.params['categories'] = 'food,restaurants'
      req.params['location'] = 'nyc'
      req.params['attributes'] = 'hot_and_new'
    end
    search_results = JSON.parse(res.body)
    render json: search_results
  end

  def display
    res = Faraday.get("https://api.yelp.com/v3/businesses/#{params[:id]}") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
    end
    details = JSON.parse(res.body)
    render json: details
  end
end
