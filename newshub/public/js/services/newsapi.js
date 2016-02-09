var api = angular.module('newsfeedApiFactory', []);

api.factory('newsfeedApi', ['$http', function($http) {

    var baseUrl = 'http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?(query parameters)&api-key=745fd04a7ee1d70fa85a654cc61ad69a:9:74251473;';

    var newsfeedInterface = {};

    newsfeedInterface.getAll = function() {
      return $http.get( baseUrl );
    }

    newsfeedInterface.grab = function( newNews, callback ) {
      var payload = { news: newNews };
      return $http.post( baseUrl, payload );
    }

    // I have to go back to the view and change the ng-click directive expression
    newsfeedInterface.getRidOf = function( id ) {
      return $http.delete( baseUrl + id );
    }

    return newsfeedInterface;

    // var api = angular.module('ApiServices', []);
    //
    // api.factory('PhonesApi', ['$http', function($http){
    //
    //   var baseUrl = '/api/phones';
    //   var phonesInterface = {};
    //
    //   phonesInterface.createPhone = function(phoneData){
    //     return $http.post(baseUrl, {phone: phoneData});
    //   };
    //
    //   return phonesInterface;
    //
    // }]);

}]);
