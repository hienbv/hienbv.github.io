var app = angular.module('module');

app.controller('PostController', ['$scope', '$http', function($scope, $http) {
    $scope.posts = {};
    
    $http.get('/datasource/posts.json').then(function(response) {
        $scope.posts = response;
    }, function(){});
}]);