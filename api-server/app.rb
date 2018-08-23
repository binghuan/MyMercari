require 'sinatra'
require 'sinatra/json'
require 'json'

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

get '/items' do
  data = File.read('./json/all.json')
  response = JSON.load(data)

  json response, content_type: :js
end

get '/items/:id' do
  idx = params['id'].to_i - 1

  data = File.read('./json/all.json')
  response = JSON.load(data)

  json response['data'][idx], content_type: :js
end

get '/categories' do
  data = File.read('./json/categories.json')
  response = JSON.load(data)

  json response, content_type: :js
end

get '/not_found' do
  status 404
end
