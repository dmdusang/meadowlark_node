var assert = require('assert');
var selenium = require('selenium-webdriver');
var By = selenium.By;
var test = require('selenium-webdriver/testing');
var chrome = require('chromedriver');

const timeOut = 15000;
var driver;
 
test.describe('Try This', function() {
	test.beforeEach(function(){
		this.timeout(timeOut);
		driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();

	});
	test.afterEach(function(){
		driver.quit();
	
	});

	test.it('Go to river page and test referrer', function(){
		var referrer = 'http://localhost:3000/tours/hood-river';
		driver.get(referrer);
		driver.findElement(By.className('requestGroupRate')).click().then(function(){
			
			
		var stuff = driver.findElement(By.name( 'referrer'));

		stuff.getAttribute('value').then(function(value){
			
			assert(value === referrer);


		});

		});


	});

});