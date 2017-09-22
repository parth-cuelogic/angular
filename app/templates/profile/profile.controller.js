"use strict";

app.controller('profileController',
    ['$scope', 'AuthService', 'DataService', '$state', 'base64', 'toaster',
        function ($scope, AuthService, DataService, $state, base64, toaster) {
            var vm = this;
            vm.user = AuthService.getUser();

            $scope.file = null;
            // if (!vm.user) { $state.go('login'); return; }

            vm.update = function () {
                let user = DataService.updateUser(vm.user);

                if (!user) toaster.pop('error', '', 'error in updating user');

                AuthService.setUser(user);
                toaster.pop('success', '', 'successfully updated information');
            };

            $scope.fileUpload = function (file) {
                base64.encode(file[0]).then((imgBase64) => {
                    vm.user.image = imgBase64;
                    $scope.profile.$setDirty();
                });
            };

        }]);