app.controller('loginController',['$scope','DataService','$state','AuthService',function($scope,DataService,$state,AuthService){
    var vm = this;
    vm.title = "Login";
    vm.loginCredentials = {
        username:'',
        password:''
    }
    vm.login = function(){
        let user = DataService.login(vm.loginCredentials);
        if(!user) {console.log("invalid credentials");return;};

        $state.go('app.home',{user:user});
    }
}]);