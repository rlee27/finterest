Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :destroy, :show] do
      member do
        resources :boards, except: [:edit, :new, :show, :update, :destroy]
        resources :pins, only: [:index]
        resources :fins, only: [:index]
      end
    end

    post '/users/submit', to: 'users#submit'
    get '/users/:userId/boards/:boardTitle', to: 'boards#show'
    patch '/users/:userId/boards/:boardId', to: 'boards#update'
    delete '/users/:userId/boards/:boardId', to: 'boards#destroy'

    resources :pins, only: [:show, :update, :destroy]

    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
