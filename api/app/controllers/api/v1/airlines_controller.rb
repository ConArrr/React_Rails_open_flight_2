module Api
  module V1
    class AirlinesController < ApplicationController
      SUCCESS = '200';
      ERROR = '500';
      before_action :set_airline, only: [:show, :update, :destroy]

      def index
        airlines = Airline.all
        render json: { status: SUCCESS, data: airlines }
      end

      def show
        render json: { status: SUCCESS, data: @airline }
      end

      def create
        airline = Airline.new(airline_params)
        if airline.save
          render json: { status: SUCCESS, data: airline }
        else
          render json: { status: ERROR, data: airline.errors }
        end
      end

      def update
        if @airline.update(airline_params)
          render json: { status: SUCCESS, data: @airline }
        else
          render json: { status: ERROR, data: @airline.errors }
        end
      end

      def destroy
        if @airline.destroy
          render json: { status: SUCCESS, data: 'Deleted' }
        else
          render json: { status: ERROR, data: @airline.errors }
        end
      end

      def set_airline
        @airline = Airline.find_by(slug: params[:slug])
      end

      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end
    end
  end
end