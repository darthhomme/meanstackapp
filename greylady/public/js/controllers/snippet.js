var ctrl = angular.module('snippetsController', ['snippetsApiFactory']);
ctrl.controller('snippetsController', ['$scope', '$snippetsApi', '$http', function($scope, $snippetsApi, $http){

  console.log("houston we don't have a problem");

  var baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=' + $scope.dateFrom + '&end_date=' + $scope.dateTo + '&sort=newest&hl=true&api-key=';
  var myKey = '62bd71e38ae6689ade861f7d1976e48f:6:74251473';
  var superKey = baseUrl + myKey;

  $scope.snippets = [];

  $scope.getNews = function() {
    console.log($scope.dateFrom);
    console.log($scope.dateTo);
  }

  function renderSnippet(){
    $http.get(superKey).then(function(response){
      var data = response.data
      $scope.snippets = data;
      console.log(response);
    })
  };

  function deleteSnippet(){
    $http.delete()
  }

}]);
