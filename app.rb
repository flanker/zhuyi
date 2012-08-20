require 'sinatra'
require 'sinatra/content_for'
require 'haml'
require 'json'
require './init.rb'

set :haml, :format => :html5

get '/' do
  haml :index
end

get '/accommodations/new' do
  json Accommodation.new
end

post '/accommodations/new' do
  data = JSON.parse(request.body.read)
  json Accommodation.create(data)
end

get '/accommodations' do
  json Accommodation.all
end

private

def json model
  content_type 'application/json'
  model.to_json
end
