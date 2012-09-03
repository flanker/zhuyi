When /^I am on the new request page$/ do
  visit '/#!/new'
end

When /^I fill following fields:$/ do |table|
  # table is a Cucumber::Ast::Table
end

When /^I save the request$/ do
  click_button 'Save'
end

Then /^I should see a accommodation with:$/ do |table|
  # table is a Cucumber::Ast::Table
end
