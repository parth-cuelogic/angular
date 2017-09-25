var app = angular.module('angulardemo', [
    'ui.bootstrap',
    'ngRoute',
    'ui.router',
    'toaster',
    'ngAnimate',
    'ui.router.state.events',
    '720kb.datepicker',
    'home.module',
    'login.module',
    'register.module']);


app.config(['$locationProvider', '$routeProvider', '$controllerProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $routeProvider, $controllerProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider.
        state({
            name: 'app',
            abstract: true,
            url: '/',
            views: {
                'main': { templateUrl: './modules/common/app.html' },
                'navbar': { templateUrl: './modules/common/navbar.html' }
            }
        });
}]);

app.run(['DataService', function (DataService) {
    DataService.createDefaultUsers();
}]);