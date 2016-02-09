var api = angular.module('snippetsApiFactory', []);
api.factory('$snippetsApi', ['$http', function($http){

  console.log("hello");

  var searchResult = {};
  var searchField = $('#search-result').val();
  var baseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20160107&end_date=20160108&sort=newest&hl=true&api-key=';
  var myKey = '62bd71e38ae6689ade861f7d1976e48f:6:74251473'
  var superKey = baseUrl + myKey;

  console.log(superKey);

  var snippetsInterface = [];

  snippetsInterface.getAllSnippets = function() {
    return $http.get( superKey ).get(function(data){
      var data = response.data;
      $scope.snippets = data;
    });
  };

  snippetsInterface.showSnippet = function() {
    // var payload = { snippet: newSnippet };
    return $http.post( superKey ).post(function(data){
      $scope.snippets = data;
    });
  };

  snippetsInterface.throwSnippet = function( id ) {


    return $http.delete( superKey + id );
  }

  return snippetsInterface;

}]);
