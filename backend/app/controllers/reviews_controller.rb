class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :destroy, :update]

  def index
    reviews = Review.all
    render json: reviews, status: 200
  end  

  def show
    render json: @review, status: 200
  end

  def create
    review = Review.create(review_params)
    render json: review, status: 201
  end

  def update
    @review.update(review_params)
    render json: @review, status: 200
  end

  def destroy
    review_id = @review.id
    @review.destroy
    render json: {message: "review deleted", review_id: review_id}
  end

  private
  def review_params
    params.require(:review).permit(:text, :rating, :edited, :user_id, :restaurant_id)
  end

  def set_review
    @review = Review.find(params[:id])
  end
end