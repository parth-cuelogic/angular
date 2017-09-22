app.controller('loginController',
    ['$scope', 'DataService', '$state', 'AuthService', 'toaster',
        function ($scope, DataService, $state, AuthService, toaster) {
            var vm = this;
            vm.title = "Login";
            vm.loginCredentials = {
                userName: 'parth',
                password: '12'
            }
            vm.login = function () {
                let user = DataService.login(vm.loginCredentials);
                if (!user) {
                    console.log("invalid credentials");
                    toaster.pop('error', '', 'Invalid Credentials');
                    return;
                };

                AuthService.setUser(user);
                $state.go('app.home', { user: user });
            }
        }]);