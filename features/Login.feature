Feature: Performing a login       

    Scenario: Login with a default user
        Given I am on the login pages
       #When I log in with a default user
        When I log in with a "mercury" users
        Then I shall be on the Flight Finder pages