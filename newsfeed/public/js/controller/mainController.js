var ctrl = angular.module("mainController", []);

ctrl.controller('main', ['$scope', function($scope){

  $scope.newsfeed = {};

  function getWhatsNew(){
    $scope.newsfeed = $scope.data.newsfeed;

  }

}]);
