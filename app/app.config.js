import home from './views/home.html';
import about from './views/about.html';
import contact from './views/contact.html';
import '@uirouter/angularjs';

angular.module('myApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: home,
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            template: about,
            controller: 'AboutController'
        })
        .state('contact', {
            url: '/contact',
            template: contact,
            controller: 'ContactController'
        });
    
    $urlRouterProvider.otherwise('/');
}]);
