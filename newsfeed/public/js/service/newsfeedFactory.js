var api = angular.module('newsfeedFactory', []);

api.factory('newsfeedApi', ['$http', function($http) {

    var baseUrl = "apinewyorktimesorwhatever.com";
    var joshKey = "my-api-key"
    var superKey = baseUrl + joshKey;

    var newsInterface = {};

    newsInterface.getAllArticles = function() {
      return $http.get( superKey );
    }

    newsInterface.showArticle = function( newPup ) {
      var payload = { newsfeed: newNewsfeed };
      return $http.post( superKey, payload );
    }

    I have to go back to the view and change the ng-click directive expression
    newsInterface.throwAway = function( id ) {


      return $http.delete( superKey + id );
    }

    return newsInterface;

}]);
