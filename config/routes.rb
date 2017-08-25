Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :destroy, :show] do
      member do
        resources :boards, except: [:edit, :new]
      end
    end

    post '/users/submit', to: 'users#submit'
    get '/users/:userId/boards/:boardTitle', to: 'boards#show'

    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
