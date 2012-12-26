Polisoms::Application.routes.draw do
  get "search/search"
  match '/search', to: 'search#search'

  get "static_pages/home"

  resources :reviews


  resources :articles
  
  match '/load_articles' => 'articles#index'
  
  resources :services


  mount Ckeditor::Engine => '/ckeditor'

  resources :abouts

  resources :offices


  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  root :to => 'static_pages#home'

  resources :news
end
