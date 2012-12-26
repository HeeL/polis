class SearchController < ApplicationController
  def search
    @results = ThinkingSphinx.search(params[:search])
  end
end
