require 'datamapper'

PROJECT_ROOT = File.expand_path(File.dirname(__FILE__))

DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite:///#{PROJECT_ROOT}/db/development.db")

require './models.rb'

DataMapper.finalize
# DataMapper.auto_upgrade!
