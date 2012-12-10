Polisoms::Application.routes.draw do
  resources :abouts


  resources :offices
  resources :news

  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  root :to => 'news#index'
  

end
