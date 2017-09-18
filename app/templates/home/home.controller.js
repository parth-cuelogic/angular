
app.controller('homeController', ['$scope', '$stateParams', '$state', 'AuthService', 'DataService', function ($scope, $stateParams, $state, AuthService, DataService) {
    var vm = this;
    vm.logedInUser = $stateParams.user ? $stateParams.user : AuthService.getUser();
    vm.assignedUsers = [];
    // if (!vm.logedInUser) { $state.go('login'); return; }
    AuthService.setUser(vm.logedInUser);

    if (vm.logedInUser) {
        vm.assignedUsers = DataService.getAssignedUsers(vm.logedInUser.assigned, vm.logedInUser.role);
    }
    
    vm.toggleAddUserModal = function(){
        
    }

}]);