class SearchController < ApplicationController
  def search
    @search = params[:search]  
    @results = ThinkingSphinx.search(params[:search])
  end
end
