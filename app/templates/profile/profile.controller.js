app.controller('profileController', ['$scope', 'AuthService', 'DataService', '$state', function ($scope, AuthService, DataService, $state) {
    var vm = this;
    vm.user = AuthService.getUser();

    // if (!vm.user) { $state.go('login'); return; }

    vm.update = function () {
        let user = DataService.updateUser(vm.user);

        if (!user) console.log('error in updating user');

        AuthService.setUser(user);
    }
}]);