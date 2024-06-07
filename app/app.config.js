import about from './views/about.html';
import contact from './views/contact.html';

import '@uirouter/angularjs';

angular.module('myApp', ['ui.router',"homeModule"]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
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
