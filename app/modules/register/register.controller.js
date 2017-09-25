angular.module('register.module', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.
            state({
                name: 'register',
                url: '/register',
                views: {
                    'main': { templateUrl: './modules/register/register.html' }
                }
            });
    }])

    .controller('registerController', ['$scope', 'DataService', '$state', function ($scope, DataService, $state) {
        var vm = this;
        vm.title = "Register";
        vm.registration = {};

        vm.checkCpassword = function () {
            if (vm.registration.password !== vm.registration.c_password) {
                $scope.registration.c_password.$setValidity("c_password", false);
            } else {
                $scope.registration.c_password.$setValidity("c_password", true);
            }
        }
        vm.register = function () {
            delete vm.registration.c_password;
            let registration = DataService.register(vm.registration);
            if (registration) {
                $state.go('login');
            }
        }
    }]);