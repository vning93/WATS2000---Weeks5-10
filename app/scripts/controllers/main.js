'use strict';

/**
 * @ngdoc function
 * @name weeks510App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weeks510App
 */
angular.module('weeks510App')
  .controller('MainCtrl', function ($scope) {
    
  	$scope.showMessage = false;

  	$scope.buttonClicked = function() {
  		$scope.render = {
  			'showMessage': true
  		};
  	};

  });
