angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
