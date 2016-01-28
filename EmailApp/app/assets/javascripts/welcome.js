var app = angular.module('EmailApp', []);

app.controller('EmailsController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/signings/').then(function(response){
    var data = response.data;
    $scope.signings = data.signings;
  });

  $scope.newSigning = {};
  $scope.createSigning = function(){
    $http.post('/api/signings', {signing: $scope.newSigning}).then(function(response){
      var data = response.data;
      $scope.signings.push( data );
    });
  };

}]);

// $scope.abandon = function( id ){
//   puppiesApi.abandon ( id ).then(function(){
//     $scope.updatePuppies();
//   });
// }
//
// function init(){
//   $scope.updateSignings();
// }
// init();
