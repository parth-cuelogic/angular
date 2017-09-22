app.controller('todoController',
    ['$scope', 'DataService', '$state', 'AuthService', 'TodoService', '$stateParams', 'toaster', 'base64',
        function ($scope, DataService, $state, AuthService, TodoService, $stateParams, toaster, base64) {
            var vm = this;
            vm.todo = {};
            vm.btn = {
                name: 'Add Todo',
                icon: 'fa fa-plus'
            }
            $scope.file = '';

            let todoId = $stateParams.id ? $stateParams.id : 0;
            if (todoId > 0) {
                vm.todo = TodoService.getTodo(todoId);
                vm.btn = {
                    name: 'Update Todo',
                    icon: 'fa fa-pencil'
                }
            }
            vm.popup = {
                popup1: false,
                popup2: false
            };
            vm.user = AuthService.getUser();
            vm.options = {
                dateDisabled: false,
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

            vm.open = function (key) {
                vm.popup[key] = true;
            };

            vm.handleIsReminder = function (key, val) {
                if (key == 'categories') {
                    if (!vm.todo[key]) vm.todo[key] = [];
                    if (vm.todo[key].includes(val)) {
                        vm.todo[key].splice(vm.todo[key].indexOf(val), 1);
                    } else {
                        vm.todo[key].push(val);
                    }
                } else {
                    vm.todo[key] = val;
                }
                $scope.todo.$setDirty();
            }
            vm.addClass = function (key, value, type) {
                if (type == 'categories') {
                    if (value instanceof Array && value.includes(key)) {
                        return true;
                    }
                    return false;
                }
                if (value == key) {
                    return true;
                } else {
                    return false;
                }
            }

            vm.addTodo = function () {
                if (vm.btn.name == 'Add Todo') {
                    TodoService.insertTodo(vm.todo, vm.user.id);
                    toaster.pop('success', '', 'todo added successfully');
                } else {
                    TodoService.updateTodo(vm.todo);
                    toaster.pop('success', '', 'todo updated successfully');
                }

                $state.go('app.home');
            }

            $scope.fileUpload = function (file) {
                base64.encode(file[0]).then((imgBase64) => {
                    vm.todo.pic = imgBase64;
                    $scope.todo.$setDirty();
                })
            }

        }]);