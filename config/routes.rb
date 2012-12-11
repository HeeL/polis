Polisoms::Application.routes.draw do
  resources :articles


  resources :services


  mount Ckeditor::Engine => '/ckeditor'

  resources :abouts


  resources :offices


  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  root :to => 'abouts#index'

  resources :news
end
