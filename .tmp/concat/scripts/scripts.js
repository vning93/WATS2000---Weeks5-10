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
    'ngTouch'
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
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

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

angular.module('weeks510App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<h1>Vince's Adding Machine!</h1> <br> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <b>{{firstnum + secondnum}}</b> </div> <br>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Welcome!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> A guide to Vince Ning's life </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );

}]);
