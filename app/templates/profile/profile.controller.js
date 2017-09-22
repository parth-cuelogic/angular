app.controller('profileController',
    ['$scope', 'AuthService', 'DataService', '$state', 'base64', 'toaster',
        function ($scope, AuthService, DataService, $state, base64, toaster) {
            var vm = this;
            vm.user = AuthService.getUser();

            vm.file = null;
            // if (!vm.user) { $state.go('login'); return; }

            vm.update = function () {
                let user = DataService.updateUser(vm.user);

                if (!user) toaster.pop('error', '', 'error in updating user');

                AuthService.setUser(user);
                toaster.pop('success', '', 'successfully updated information');
            }

            vm.fileUpload = function () {
                base64.encode(vm.file[0]).then((imgBase64) => {
                    vm.user.image = imgBase64;
                    $scope.profile.$setDirty();
                })
            }

        }]);