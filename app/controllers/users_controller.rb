class UsersController < ApplicationController

  def index
    response = HTTParty.get('https://jsonplaceholder.typicode.com/users')
    parsed_data = response.parsed_response
    respond_to do |format|
      format.html
      # format.js
      format.json { render json: parsed_data }
    end
  end

end
