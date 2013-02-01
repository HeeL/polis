class StaticPagesController < ApplicationController
  def home
    @review = Review.new
    @office_select = Office.all
    @articles = Article.limit(3)
    @priem = About.find(15)
    @zapis = About.find(16)
    @netpolis = About.find(9)
  end
end
