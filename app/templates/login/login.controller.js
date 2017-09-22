app.controller('loginController', ['$scope', 'DataService', '$state', 'AuthService', function ($scope, DataService, $state, AuthService) {
    var vm = this;
    vm.title = "Login";
    vm.loginCredentials = {
        userName: 'parth',
        password: '12'
    }
    vm.login = function () {
        let user = DataService.login(vm.loginCredentials);
        if (!user) { console.log("invalid credentials"); return; };

        AuthService.setUser(user);
        $state.go('app.home', { user: user });
    }
}]);