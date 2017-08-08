var assert = require('chai').assert;
var mocha = require('mocha');
var selenium = require('selenium-webdriver');
var By = selenium.By;
var chrome = require('chromedriver');
var mocha = require('mocha');
const timeOut = 15000;
var driver;



suite('"About" Page Tests', function(){

	beforeEach(function(){
		this.timeout(timeOut);
		driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
	});



	test('request a group rate quote from the hood river tour page', function(){
		var referrer = 'http://localhost:3000/tours/hood-river';

		driver.get(referrer);
		driver.findElement(By.className('requestGroupRate')).click(function(){
			assert(driver.findElement({name: 'referrer'}).getAttribute('value') === referrer);
			console.log('passed');
		});
		
	});
});