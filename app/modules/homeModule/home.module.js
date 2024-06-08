import { HomeController } from './controllers/home.controller';
import home from './views/home.html';
import { DataService } from '../../services/data.service';

angular.module('homeModule', ['fetchModule'])
    .controller('HomeController', HomeController)
    .service('DataService',DataService)
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: home, // Replace with your actual template or template URL
                controller: 'HomeController',
                controllerAs: 'homeCtrl' 
            });
    }])

