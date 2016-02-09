var app = angular.module('EmailApp', []);

app.controller('EmailsController', ['$scope', '$http', function($scope, $http){


  $scope.getAllSignings = function() {
    $http.get('/api/signings/').then(function(response){
      var data = response.data;
      $scope.signings = data.signings;
    });
  }



  $scope.newSigning = {};
  $scope.createSigning = function(){
    $http.post('/api/signings/', {signing: $scope.newSigning}).then(function(response){
      var data = response.data;
      // $scope.signings.push( data );
      $scope.getAllSignings();
      $scope.newSigning = {};
      alert('Thank you. Your information has been successfully submitted.');
    });
  };

  $scope.deleteSigning = function( id ){
    $http.delete('/api/signings/' + id).then(function(response){
      $scope.getAllSignings();
    });
  };



  $scope.getAllSignings();
}]);




// $scope.abandon = function( index ) {
//   $scope.puppies.splice(index, 1);
// }
