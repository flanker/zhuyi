class BusinessType
  BUSINESS = 'Business'
  PERSONAL = 'Personal'
  GUEST_VISIT = 'Guest visit'
end

class Type
  APARTMENT = 'Apartment'
  HOTEL = 'Hotel'
end

class Accommodation
  include DataMapper::Resource

  property :id, Integer, :serial => true, :key => true
  property :business_type, String, :default => BusinessType::BUSINESS
  property :project_code, String
  property :name, String
  property :type, String, :default => Type::APARTMENT
  property :start_date, String
  property :end_date, String
  property :house_clean, String
  property :network, Boolean
  property :wifi, Boolean
  property :cable_television, Boolean
  property :air_condition, Boolean
  property :landing_phone, Boolean
  property :washing_machine, Boolean
  property :dryer, Boolean
  property :notes, Text, :lazy => false
end


