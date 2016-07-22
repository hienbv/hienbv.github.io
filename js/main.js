var app = angular.module('blog', []);
app.controller('PostController', ['$scope', '$http', function ($scope, $http) {
    $scope.posts = {};

    $http.get('datasource/posts.json').then(function (response) {
        $scope.posts = response.data;
    }, function () {
    });
}]);