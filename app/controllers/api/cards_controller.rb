class Api::CardsController < ApplicationController
  def create
    list = List.find(params[:list_id])

    @card = Card.new(card_params.merge({list: list}))

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'No list with that id exists'
    render 'api/shared/error', status: 404
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :update, status: 200
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  rescue ActiveRecord::RecordNotFound
    @error = 'No card with that id exists'
    render 'api/shared/error', status: 404
  end

  def show
    @card = Card.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = 'No card with that id exists'
    render 'api/shared/error', status: 404
  end

  def destroy
    @card = Card.find(params[:id])

    @card.destroy

  rescue ActiveRecord::RecordNotFound
    @error = 'No card with that id exists'
    render 'api/shared/error', status: 404
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :due_date, :completed, :labels => [])
  end
end
