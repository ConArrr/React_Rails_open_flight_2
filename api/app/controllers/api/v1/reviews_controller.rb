module Api
  module V1
    class ReviewsController < ApplicationController
      SUCCESS = '200';
      ERROR = '500';

      def create
        review = Review.new(review_params)
        if review.save
          render json: { status: SUCCESS, data: review }
        else
          render json: { status: ERROR, data: review.errors }
        end
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end
    end
  end
end