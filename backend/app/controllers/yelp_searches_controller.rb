class YelpSearchesController < ApplicationController
  def search
    yelp_search = YelpSearch.create(yelp_search_params)
    render json: yelp_search, status: 201
  end
  
  def fetch
    term = params[:term]
    location = params[:location]
    res = Faraday.get("https://api.yelp.com/v3/businesses/search?term=#{term}&location=#{location}") do |req|
      req.headers['Authorization'] = "Bearer #{ENV['API_KEY']}"
      req.headers['Content-Type'] = 'application/json'
    end
    search_results = JSON.parse(res.body)
    render json: search_results
  end

  private
  def yelp_search_params
    params.require(:yelp_search).permit(:term, :location)
  end
end


