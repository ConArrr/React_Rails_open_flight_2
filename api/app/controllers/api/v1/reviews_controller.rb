module Api
  module V1
    class ReviewsController < ApplicationController
      SUCCESS = '200';
      ERROR = '500';

      def create
        review = airline.reviews.new(review_params)
        if review.save
          render json: to_json(review)
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private
        def airline
          @airline ||= Airline.find(params[:airline_id])
        end

        def review_params
          params.require(:review).permit(:title, :description, :score, :airline_id)
        end

        def to_json(data)
          ReviewSerializer.new(data).serialized_json
        end
    end
  end
end