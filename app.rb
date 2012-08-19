require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/json'
require 'haml'
require 'json'
require './init.rb'

set :haml, :format => :html5

get '/' do
  redirect '/new'
end

get '/new' do
  haml :new
end

post '/new' do
  @accommodation = Accommodation.create(params)

  redirect '/recent'
end

get '/recent' do
  @accommodations = Accommodation.all

  haml :recent
end
