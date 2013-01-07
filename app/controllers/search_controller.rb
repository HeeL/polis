class SearchController < ApplicationController
  def search
    @search = params[:search]  
    @results = ThinkingSphinx.search(params[:search])
    
    if request.xhr? 
     render :partial => 'results', layout: false
    end
    
  end
end
