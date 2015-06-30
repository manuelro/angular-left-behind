'use strict';

/**
 * @ngdoc overview
 * @name angularLeftBehindApp
 * @description
 * # angularLeftBehindApp
 *
 * Main module of the application.
 */
angular
  .module('angularLeftBehindApp', []);

'use strict';

/**
 * @ngdoc function
 * @name angularLeftBehindApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLeftBehindApp
 */
angular.module('angularLeftBehindApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
