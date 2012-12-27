class StaticPagesController < ApplicationController
  def home
    @review = Review.new
    @office_select = Office.all
    @articles = Article.limit(3)
  end
end
