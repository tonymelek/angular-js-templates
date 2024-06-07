import home from './views/home.html'
import about from './views/about.html'
import contact from './views/contact.html'
import 'angular-route';

angular.module('myApp',['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            template: home,
            controller: 'HomeController'
        })
        .when('/about', {
            template: about,
            controller: 'AboutController'
        })
        .when('/contact', {
            template: contact,
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
