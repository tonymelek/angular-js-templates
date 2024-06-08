import angular from 'angular';
import '../styles/style.css';
import './modules/homeModule/home.module';
import './modules/fetchModule/fetch.module';

import './app.config';


import {AboutController} from './controllers/about.controller';
import {ContactController} from  './controllers/contact.controller';



angular.module('myApp')
.controller('ContactController', ContactController)
.controller('AboutController',AboutController)




