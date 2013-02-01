class StaticPagesController < ApplicationController
  def home
    @review = Review.new
    @office_select = Office.all
    @articles = Article.limit(3)
    @priem = About.find(15)
    @zapis = About.find(16)
    @netpolis = Service.find(9)
    @whyfree = About.find(18)
    @whois = About.find(14)
  end
end
