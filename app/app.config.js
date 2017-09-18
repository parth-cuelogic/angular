var app = angular.module('angulardemo',['ui.bootstrap','ngRoute','ui.router']);


app.config(['$locationProvider', '$routeProvider','$controllerProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$routeProvider,$controllerProvider,$stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/login');
    $stateProvider.
    state({
        name:'app',
        abstract: true,
        url:'/',
        views: {
            'main': { templateUrl: './templates/common/app.html' },
            'navbar': { templateUrl: './templates/common/navbar.html' }
        }
    }).
    state({
        name: 'app.home',
        url: 'home',
        templateUrl: './templates/home/home.html',
        params:{
            user:undefined
        }
    }).
    state({
        name: 'app.profile',
        url: 'profile',
        templateUrl: './templates/profile/profile.html'
    }).
    state({
        name: 'login',
        url: '/login',
        views: {
            'main': { templateUrl: './templates/login/login.html' }
        }
    }).
    state({
        name: 'register',
        url: '/register',
        views: {
            'main': { templateUrl: './templates/register/register.html' }
        }
    });
}]);

app.run(['DataService',function(DataService) {
    DataService.createDefaultUsers();
}]);