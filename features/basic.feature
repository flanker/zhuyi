Feature: The happy path

  Scenario: Save the accommodation request
    When I am on the new request page
    And I fill following fields:
      | Business Type              | Personal     |
      | Project code               | TEST_CODE    |
      | Name                       | Feng Zhichao |
      | Accommodation Type         | Hotel        |
      | Start Date                 | 2012/09/10   |
      | End Date                   | 2012/09/29   |
      | I need house clean service | checked      |
      | House clean                | Weekly       |
      | I need living goods        | checked      |
      | Network                    | checked      |
      | Landing Phone              | checked      |
    And I save the request
    Then I should see a accommodation with:
      | Business Type              | Personal     |
      | Project code               | TEST_CODE    |
      | Name                       | Feng Zhichao |
      | Start Date                 | 2012/09/10   |
      | End Date                   | 2012/09/29   |
