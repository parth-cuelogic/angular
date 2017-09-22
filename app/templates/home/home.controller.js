
app.controller('homeController',
    ['$scope', '$stateParams', '$state', 'AuthService', 'DataService', 'TodoService', 'toaster', '$uibModal',
        function ($scope, $stateParams, $state, AuthService, DataService, TodoService, toaster, $uibModal) {
            var vm = this;
            vm.logedInUser = $stateParams.user ? $stateParams.user : AuthService.getUser();
            vm.todos = [];
            vm.deleteId = null;
            vm.filter = {
                value: '',
                key: 'name'
            }
            $scope.order = [];
            $scope.order['key'] = 'name';
            $scope.order['name'] = false;
            $scope.order['isPublic'] = false;
            $scope.order['isCompleted'] = false;
            vm.uibmodal;


            if (vm.logedInUser)
                vm.todos = TodoService.getUserTodos(vm.logedInUser.todo);

            vm.addNewTodo = function (parentSelector) {
                $state.go('app.todo', { id: '' });
            }

            vm.editTodo = function (id) {
                $state.go('app.todo', { id: id });
            }

            $scope.deleteTodo = function () {
                TodoService.deleteTodo(vm.logedInUser.id, vm.deleteId);
                toaster.pop('success', "", "successfully deleted");
                $scope.cancel();
            }

            $scope.cancel = function () {
                vm.uibmodal.dismiss();
            }

            vm.authService = AuthService;
            $scope.$watch('vm.authService.getUser()', function (newValue, oldValue) {
                if (newValue && newValue != oldValue) {
                    vm.todos = TodoService.getUserTodos(newValue.todo);
                    vm.logedInUser = newValue;
                }
            })

            vm.openModal = function (id) {
                vm.deleteId = id;
                vm.uibmodal = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/modal/confirmation.modal.html',
                    size: 'sm',
                });
            };

            vm.sort = function (keyVal) {
                if ($scope.order.key != keyVal) {
                    $scope.order[keyVal] = true;
                } else {
                    $scope.order[keyVal] = !$scope.order[keyVal]
                }
                $scope.order['key'] = keyVal;
            }


        }]);