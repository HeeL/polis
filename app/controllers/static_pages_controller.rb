class StaticPagesController < ApplicationController
  def home
    @review = Review.new
    @office_select = Office.all
    @articles = Article.order("created_at DESC").limit(3)
  end
end
