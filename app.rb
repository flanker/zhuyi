require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/json'
require 'haml'
require 'json'

set :haml, :format => :html5

get '/' do
  haml :index
end