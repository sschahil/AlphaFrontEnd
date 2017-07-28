//Define the AngluarJS Module
//Modules are used to:
//1. Associate an AngularJS app with part of an HTML Document
//2. Provide access to AngularJS features
//3. Help with organization
//angular.module() excepts the module name, list of modules this module needs and an optional configuration for the module
//Modules that work with HTML normally have a name that contains app
var app1 = angular.module('app1', []);

//Define Controller and implement the Scope which links HTML elements to variables in the Scope.
//It receives the controller name and a factory function which gets the controller ready to use.
//We are saying that $scope is a dependecy and that we want Angular to pass in the $scope object when the function is called.
//This is an example of dependency injection.
//Angular sees that my factory function contains the $scope component and then it gets it and passes it to the function automatically
app1.controller('ctrl1', function($scope) {

	//Define initial values
	$scope.first = 1;
	$scope.second = 1;

	//change the value for calculation when the button is clicked 
	//this is a shortcut using the unary plus operator to convert
	//the string number values which are then added
	$scope.updateValue = function() {
		$scope.calculation = $scope.first + ' + ' + $scope.second +
			" = " + (+$scope.first + +$scope.second);
	};
});