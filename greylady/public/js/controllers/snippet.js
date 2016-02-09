var ctrl = angular.module('snippetsController', ['snippetsApiFactory']);
ctrl.controller('snippetsController', ['$scope', 'snippetsApi', '$http', '$window', function($scope, snippetsApi, $http, $window){

  // Workaround to get Angular's $http.jsonp to play nice with the NYTimes API.
  // http://stackoverflow.com/questions/19375033/using-angularjs-jsonp-when-callback-cant-be-defined
  $window.svc_search_v2_articlesearch = function(apiResponse) {
    var docs = apiResponse.response.docs;
    $scope.docs = docs;
  };

  $scope.docs = [];
  function Date.Prototype.dateToYMD(date) {
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      return  y + (m<=9 ? '0' + m : m) +  (d <= 9 ? '0' + d : d);
  }
$scope.getNews = function() {

    var fromDate = $scope.dateFrom.dateToYMD();
    var toDate = $scope.dateTo.dateToYMD();
    debugger
    snippetsApi.getAllSnippets( fromDate, toDate ).then(function( data ){
      console.log(data);
    });

  }

  function renderSnippet(){
    $http.get(superKey).then(function(response){
      var data = response.data;
      $scope.docs = data;
      console.log(response);
    })
  };

  function deleteSnippet(){
    $http.delete()
  }

}]);
