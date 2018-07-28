Rails.application.routes.draw do
  root "pages#index"
  get "pages/home"
  get "pages/index"
  get "pages/manage"
  resources :inventories, only: :index
end
