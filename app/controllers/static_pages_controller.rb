class StaticPagesController < ApplicationController
  def home
    @review = Review.new
    @office_select = Office.all
    @articles = Article.limit(3)
    @priem = About.find(11)
    @zapis = About.find(11)
    @netpolis = About.find(11)
  end
end
