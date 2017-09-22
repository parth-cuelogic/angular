app.controller('mainController',
    ['$scope', 'AuthService', '$state', '$rootScope',
        function ($scope, AuthService, $state, $rootScope) {
            var vm = this;
            vm.title = "Hello Angular1";
            vm.authService = AuthService;
            vm.user = undefined;
            $scope.$watch('vm.authService.getUser()', function (newValue) {
                vm.user = newValue;
            })

            vm.logout = function () {
                AuthService.setUser(undefined);
                $state.go('login');
            }

            // $rootScope.$on('$stateChangeStart',
            //     function (event, toState, toParams, fromState, fromParams) {
            //         if (toState.name !== 'login' && toState.name !== 'register' && !AuthService.getUser()) {
            //             event.preventDefault();
            //             $state.go('login');
            //         }
            //     });
        }]);