class YelpController < ApplicationController
  def search
    res = Faraday.get('https://api.yelp.com/v3/businesses/search') do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.headers['Content-Type'] = 'application/json'
      # req.params['location'] = 'nyc'
    end
    search_results = JSON.parse(res.body)
    render json: search_results
    # byebug
  end
end


