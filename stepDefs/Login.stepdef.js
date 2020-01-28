//import {Given} from 'cucumber';
const { Given, When, Then } = require('cucumber');

 Given('I am on the login pages', () => {
    browser.url('http://newtours.demoaut.com');
 });

  When(/^I log in with a default users$/, () => {
    browser.$("//*[@name='userName']").setValue("mercury");
    browser.$("//*[@name='password']").setValue("mercury");
    
    browser.$("//*[@name='login']").click();

    browser.pause(5000);
 });

 When('I log in with a {string} users', abc => {
      browser.$("//*[@name='userName']").setValue(abc);
      browser.$("//*[@name='password']").setValue(abc);
      
      browser.$("//*[@name='login']").click();

      browser.pause(5000);
 });

 Then(/^I shall be on the Flight Finder pages$/, () => {
    var strUrl = browser.getUrl();
    console.log("URL is : "+strUrl);
 });