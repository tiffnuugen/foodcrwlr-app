class YelpSearchQueriesController < ApplicationController
  def search
    term = params[:term]
    location = params[:location]
    res = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.params['term'] = term
      req.params['location'] = location
    end
    search_results = JSON.parse(res.body)
    render json: search_results
  end
end
