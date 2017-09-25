angular.module('angulardemo').service('AuthService', function() {
    this.user = undefined;
    
    this.setUser= function(user){
        this.user = user;
    }
    
    this.getUser = function(user){
        return this.user;
    }
})