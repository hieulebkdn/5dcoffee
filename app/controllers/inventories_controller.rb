class InventoriesController < ApplicationController
  def index
    @links = Link.all
  end
end
