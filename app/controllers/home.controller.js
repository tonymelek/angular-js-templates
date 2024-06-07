import '../services/data.service';

angular.module('myApp').controller('HomeController', ['$scope','DataService', function($scope,DataService) {
    $scope.message = "Welcome to the Home Page!";
    $scope.data = DataService.data;
}]);
