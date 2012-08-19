require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/json'
require 'haml'
require 'json'
require './init.rb'

set :haml, :format => :html5

get '/' do
  haml :index
end

post '/' do
  require 'pp'; pp params

  @accommodation = Accommodation.create(params)

  json JSON.parse(@accommodation.to_json)
end
