app.directive('deletePermission', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            if(!scope.$parent.$parent.vm.logedInUser.todo.includes(scope.todo.id)){
                angular.element(elem).attr('disabled',true)
            }
        }
    }
})