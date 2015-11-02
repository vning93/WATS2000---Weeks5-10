angular.module('weeks510App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<h1>Vince's Adding Machine!</h1> <br> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <b>{{firstnum + secondnum}}</b> </div> <br>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Welcome!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> A guide to Vince Ning's life </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/places.html',
    "<h1>Here are the places that I've been!</h1> <map center=\"47.6097, -122.3331\" zoom=\"2\"> <marker ng-repeat=\"coordinate in coordinates\" position=\"{{coordinate.latitude}}, {{coordinate.longitude}}\" title=\"Places I've Visited\" on-click=\"focusCity(coordinate)\"></marker> </map>"
  );

}]);
