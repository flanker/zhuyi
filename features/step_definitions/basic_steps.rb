When /^I am on the new request page$/ do
  visit '/#!/new'
end

When /^I fill following fields:$/ do |table|
  table.rows_hash.each_pair do |name, value|
    label = find 'label', :text => name
    field = find "[name='#{label[:for]}']"

    case field[:type]
    when 'select_one'
      select value, :from => name
    when 'radio'
      choose value
    when 'checkbox'
      check name
    when 'text'
      fill_in name, :with => value
    end
  end
end

When /^I save the request$/ do
  click_button 'Save'
end

Then /^I should see a accommodation with:$/ do |table|
  # table is a Cucumber::Ast::Table
end
