app.controller('mainController',['$scope','AuthService','$state',function($scope,AuthService,$state){
    var vm = this;
    vm.title = "Hello Angular1";
    vm.authService = AuthService;
    vm.user=undefined;
    $scope.$watch('vm.authService.getUser()',function(newValue){
        vm.user = newValue;
        console.log(newValue);
    })

    vm.logout = function(){
        AuthService.setUser(undefined);
        $state.go('login');
    }
}]);