Rails.application.routes.draw do
  root "page#index"
  get "page/home"
  get "page/index"
end
