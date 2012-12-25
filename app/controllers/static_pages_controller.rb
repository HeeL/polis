class StaticPagesController < ApplicationController
  def home
    @offices = Office.all
    @doctors = Doctor.all
    @review = Review.new(params[:review])
    @articles = Article.limit(3)
  end
end
