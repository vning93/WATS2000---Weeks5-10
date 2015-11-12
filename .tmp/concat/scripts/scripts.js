'use strict';

/**
 * @ngdoc overview
 * @name weeks510App
 * @description
 * # weeks510App
 *
 * Main module of the application.
 */
angular
  .module('weeks510App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap',
    'ngStorage'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/places', {
        templateUrl: 'views/places.html',
        controller: 'PlacesCtrl',
        controllerAs: 'places'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name weeks510App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weeks510App
 */
angular.module('weeks510App')
  .controller('MainCtrl', ["$scope", function ($scope) {
    
  	$scope.showMessage = false;

  	$scope.buttonClicked = function() {
  		$scope.render = {
  			'showMessage': true
  		};
  	};

  }]);

'use strict';

/**
 * @ngdoc function
 * @name weeks510App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weeks510App
 */
angular.module('weeks510App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name weeks510App.controller:PlacesCtrl
 * @description
 * # PlacesCtrl
 * Controller of the weeks510App
 */
angular.module('weeks510App')
  .controller('PlacesCtrl', ["$scope", "$localStorage", function ($scope, $localStorage) {

    $localStorage.places = [];

    $scope.focusCity = function(event) {
    	console.log(event);
    };

    $scope.coordinates = [
    	// Americas
    	{
    		"city": "Washington, DC",
    		"country": "United States",
    		"latitude": 38.9047,
    		"longitude": -77.0164
    	},
    	{
    		"city": "Seattle",
    		"country": "United States",
    		"latitude": 47.6097,
    		"longitude": -122.3331
    	},
    	{
    		"city": "New York",
    		"country": "United States",
    		"latitude": 40.7127,
    		"longitude": -74.0059
    	},
    	{
    		"city": "San Francisco",
    		"country": "United States",
    		"latitude": 37.7833,
    		"longitude": -122.4167
    	},
    	{
    		"city": "Chicago",
    		"country": "United States",
    		"latitude": 41.8369,
    		"longitude": -87.6847
    	},
    	{
    		"city": "Las Vegas",
    		"country": "United States",
    		"latitude": 36.1215,
    		"longitude": -115.1739
    	},   	
    	{
    		"city": "Rockville",
    		"country": "United States",
    		"latitude": 39.0836,
    		"longitude": -77.1483
    	},
    	{
    		"city": "Myrtle Beach",
    		"country": "United States",
    		"latitude": 33.7167,
    		"longitude": -78.8833
    	},
    	{
    		"city": "San Juan Islands (Friday Harbor)",
    		"country": "United States",
    		"latitude": 48.5353,
    		"longitude": -123.0311
    	},
    	{
    		"city": "Grand Canyon",
    		"country": "United States",
    		"latitude": 36.1000,
    		"longitude": 112.1000
    	},
    	{
    		"city": "New Orleans",
    		"country": "United States",
    		"latitude": 29.9500,
    		"longitude": 90.0667
    	},
    	{
    		"city": "Pittsburgh",
    		"country": "United States",
    		"latitude": 40.4397,
    		"longitude": -79.9764
    	},
    	{
    		"city": "Philadelphia",
    		"country": "United States",
    		"latitude": 39.9500,
    		"longitude": -75.1667
    	},
    	{
    		"city": "Charlottesville",
    		"country": "United States",
    		"latitude": 38.0299,
    		"longitude": -78.4790
    	},
    	{
    		"city": "St. Louis",
    		"country": "United States",
    		"latitude": 38.6272,
    		"longitude": -90.1978
    	},
    	{
    		"city": "Atlanta",
    		"country": "United States",
    		"latitude": 33.7550,
    		"longitude": -84.3900
    	},
    	{
    		"city": "Orlando",
    		"country": "United States",
    		"latitude": 28.4158,
    		"longitude": -81.2989
    	},    	
    	{
    		"city": "Miami",
    		"country": "United States",
    		"latitude": 25.7753,
    		"longitude": -80.2089
    	},
    	{
    		"city": "Boston",
    		"country": "United States",
    		"latitude": 42.3601,
    		"longitude": -71.0589
    	},
    	{
    		"city": "Palisades Park",
    		"country": "United States",
    		"latitude": 40.8470,
    		"longitude": -73.9971
    	},
    	{
    		"city": "Anchorage",
    		"country": "United States",
    		"latitude": 61.2167,
    		"longitude": -149.9000
    	},
    	{
    		"city": "Juneau",
    		"country": "United States",
    		"latitude": 58.3000,
    		"longitude": -134.4167
    	},
    	{
    		"city": "Ketchikan",
    		"country": "United States",
    		"latitude": 55.3500,
    		"longitude": -131.6733
    	},
    	{
    		"city": "Portland",
    		"country": "United States",
    		"latitude": 45.5200,
    		"longitude": -122.6819
    	},
    	{
    		"city": "Toronto",
    		"country": "Canada",
    		"latitude": 43.7000,
    		"longitude": -79.4000
    	},
    	{
    		"city": "Santiago",
    		"country": "Chile",
    		"latitude": -33.4500,
    		"longitude": -70.6667
    	},
    	{
    		"city": "Easter Island",
    		"country": "Chile",
    		"latitude": -27.1167,
    		"longitude": -109.3667
    	},
    	{
    		"city": "Cozumel",
    		"country": "Mexico",
    		"latitude": 20.4167,
    		"longitude": -86.9167
    	},

    	// Europe
    	{
    		"city": "London",
    		"country": "United Kingdom",
    		"latitude": 51.5072,
    		"longitude": -0.1275
    	},
    	{
    		"city": "Windsor",
    		"country": "United Kingdom",
    		"latitude": 51.4833,
    		"longitude": -0.6042
    	},
    	{
    		"city": "Madrid",
    		"country": "Spain",
    		"latitude": 40.4000,
    		"longitude": -3.7167
    	},
    	{
    		"city": "Barcelona",
    		"country": "Spain",
    		"latitude": 41.3833,
    		"longitude": 2.1833
    	},
    	{
    		"city": "Paris",
    		"country": "France",
    		"latitude": 48.8567,
    		"longitude": 2.3508
    	},
    	{
    		"city": "Rome",
    		"country": "Italy",
    		"latitude": 41.9000,
    		"longitude": 12.5000
    	},
    	{
    		"city": "Florence",
    		"country": "Italy",
    		"latitude": 43.7833,
    		"longitude": 11.2500
    	},
    	{
    		"city": "Venice",
    		"country": "Italy",
    		"latitude": 45.4375,
    		"longitude": 12.3358
    	},
    	{
    		"city": "Milan",
    		"country": "Italy",
    		"latitude": 45.4667,
    		"longitude": 9.1833
    	},
    	{
    		"city": "Anacapri",
    		"country": "Italy",
    		"latitude": 40.5500,
    		"longitude": 14.2167
    	},
    	{
    		"city": "Sankt Moritz",
    		"country": "Switzerland",
    		"latitude": 46.5000,
    		"longitude": 9.8333
    	},
    	{
    		"city": "Bern",
    		"country": "Switzerland",
    		"latitude": 46.9500,
    		"longitude": 7.4500
    	},
    	{
    		"city": "Brussels",
    		"country": "Belgium",
    		"latitude": 50.8500,
    		"longitude": 4.3500
    	},
    	{
    		"city": "Bruges",
    		"country": "Belgium",
    		"latitude": 51.2167,
    		"longitude": 3.2333
    	},
    	{
    		"city": "Berlin",
    		"country": "Germany",
    		"latitude": 52.5167,
    		"longitude": 13.3833
    	},
    	{
    		"city": "Amsterdam",
    		"country": "United Kingdom",
    		"latitude": 52.3667,
    		"longitude": 4.9000
    	},

    	// Asia
    	{
    		"city": "Inner Mongolia",
    		"country": "China",
    		"latitude": 44.0000,
    		"longitude": 113.0000
    	},
    	{
    		"city": "Beijing",
    		"country": "China",
    		"latitude": 39.9167,
    		"longitude": 116.3833
    	},
    	{
    		"city": "Shanghai",
    		"country": "China",
    		"latitude": 31.2000,
    		"longitude": 121.5000
    	},
    	{
    		"city": "Hangzhou",
    		"country": "China",
    		"latitude": 30.2500,
    		"longitude": 120.1667
    	},
    	{
    		"city": "Chengdu",
    		"country": "China",
    		"latitude": 30.6586,
    		"longitude": 104.0647
    	},
    	{
    		"city": "Hong Kong",
    		"country": "China",
    		"latitude": 22.2783,
    		"longitude": 114.1747
    	},
    	{
    		"city": "Macau",
    		"country": "China",
    		"latitude": 22.1667,
    		"longitude": 113.5500
    	},
    	{
    		"city": "Great Wall",
    		"country": "China",
    		"latitude": 40.6769,
    		"longitude": 117.2319
    	},
    	{
    		"city": "Manila",
    		"country": "Philippines",
    		"latitude": 14.5800,
    		"longitude": 121.0000
    	},
    	{
    		"city": "Alaminos",
    		"country": "Philippines",
    		"latitude": 16.1603,
    		"longitude": 119.9803
    	},
    	{
    		"city": "Hanoi",
    		"country": "Vietnam",
    		"latitude": 21.0285,
    		"longitude": 105.8542
    	},
    	{
    		"city": "Ho Chi Minh City",
    		"country": "Vietnam",
    		"latitude": 10.7500,
    		"longitude": 106.6667
    	},
    	{
    		"city": "Singapore",
    		"country": "Singapore",
    		"latitude": 1.3000,
    		"longitude": 103.8000
    	},
    	{
    		"city": "Bangkok",
    		"country": "Thailand",
    		"latitude": 13.7563,
    		"longitude": 100.5018
    	},
    	{
    		"city": "Phuket",
    		"country": "Thailand",
    		"latitude": 7.8900,
    		"longitude": 98.3983
    	},
    	{
    		"city": "Ko Samui",
    		"country": "Thailand",
    		"latitude": 9.5000,
    		"longitude": 100.0000
    	},
    	{
    		"city": "Ko Phangan",
    		"country": "Thailand",
    		"latitude": 9.7500,
    		"longitude": 100.0333
    	}
    ];

    $localStorage.places.push($scope.coordinates);

  }]);

angular.module('weeks510App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<h1>Vince's Adding Machine!</h1> <br> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <b>{{firstnum + secondnum}}</b> </div> <br>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Welcome!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> A guide to Vince Ning's life </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\" ng-click=\"buttonClicked()\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div ng-messages=\"render\"> <p class=\"bg-success text-success\" ng-message=\"showMessage\"> Message! </p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/places.html',
    "<h1>Here are the places that I've been!</h1> <map center=\"47.6097, -122.3331\" zoom=\"2\"> <marker ng-repeat=\"coordinate in coordinates\" position=\"{{coordinate.latitude}}, {{coordinate.longitude}}\" title=\"Places I've Visited\" on-click=\"focusCity(coordinate)\"></marker> </map>"
  );

}]);
