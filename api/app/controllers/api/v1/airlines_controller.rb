module Api
  module V1
    class AirlinesController < ApplicationController
      SUCCESS = '200';
      ERROR = '500';
      before_action :set_airline, only: [:show, :update, :destroy]

      def index
        airlines = Airline.all
        render json: to_json(airlines)
      end

      def show
        render json: to_json(@airline)
      end

      def create
        airline = Airline.new(airline_params)
        if airline.save
          render json: to_json(airline)
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      def update
        if @airline.update(airline_params)
          render json: to_json(@airline)
        else
          render json: { error: @airline.errors.messages }, status: 422
        end
      end

      def destroy
        if @airline.destroy
          head :no_content
        else
          render json: { error: @airline.errors.messages }, status: 422
        end
      end

      private
        def set_airline
          @airline = Airline.find_by(slug: params[:slug])
        end

        def airline_params
          params.require(:airline).permit(:name, :image_url)
        end

        def options
          @options ||= { include: %i[reviews] }
        end

        def to_json (data)
          AirlineSerializer.new(data, options).serialized_json
        end
    end
  end
end