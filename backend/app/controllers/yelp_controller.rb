class YelpController < ApplicationController
  def search
    term = params[:term]
    location = params[:location]
    res = Faraday.get("https://api.yelp.com/v3/businesses/search?term=#{term}&location=#{location}") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.headers['Content-Type'] = 'application/json'
    end
    search_results = JSON.parse(res.body)
    render json: search_results
  end
end


