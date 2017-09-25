/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
module.exports = __webpack_require__(22);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var app = angular.module('angulardemo', [
    'ui.bootstrap',
    'ngRoute',
    'ui.router',
    'toaster',
    'ngAnimate',
    'ui.router.state.events',
    '720kb.datepicker',
    'home.module',
    'login.module',
    'register.module']);


app.config(['$locationProvider', '$routeProvider', '$controllerProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $routeProvider, $controllerProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider.
        state({
            name: 'app',
            abstract: true,
            url: '/',
            views: {
                'main': { templateUrl: './modules/common/app.html' },
                'navbar': { templateUrl: './modules/common/navbar.html' }
            }
        });
}]);

app.run(['DataService', '$rootScope', 'AuthService', '$state',
    function (DataService, $rootScope, AuthService, $state) {
        //create default user for login
        DataService.createDefaultUsers();

        //handles permission for restricted routes
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name !== 'login' && toState.name !== 'register' && !AuthService.getUser()) {
                    event.preventDefault();
                    $state.go('login');
                }
            });
    }]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

angular.module('angulardemo')
    .controller('mainController',
    ['$scope', 'AuthService', '$state', '$rootScope',
        function ($scope, AuthService, $state, $rootScope) {
            var vm = this;
            vm.title = "Hello Angular1";
            vm.authService = AuthService;
            vm.user = undefined;
            $scope.$watch('vm.authService.getUser()', function (newValue) {
                vm.user = newValue;
            });

            vm.logout = function () {
                AuthService.setUser(undefined);
                $state.go('login');
            };
        }]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

angular.module('angulardemo').service('AuthService', function() {
    this.user = undefined;
    
    this.setUser= function(user){
        this.user = user;
    }
    
    this.getUser = function(user){
        return this.user;
    }
})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var User = (function () {
    var id = 1;

    return function User(username, password, email, firstname, lastname, address, gender, image) {
        if (!image) {
            image = 'data:image/png;base64,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'
        }
        this.id = id++;
        this.userName = username;
        this.password = password;
        this.email = email;
        this.firstName = firstname;
        this.lastName = lastname;
        this.image = image;
        this.address = address;
        this.gender = gender;
        this.todo = [];
    }

})();

angular.module('angulardemo').service('DataService', ['AuthService', function (AuthService) {
    this.users = [];

    this.createDefaultUsers = function () {

        //students
        this.users.push(new User('parth', '123', 'p@g.com', 'parth', 'vakharia', 'pune', 'M'));
        this.users.push(new User('demo', '123', 'p@g.com', 'parth', 'vakharia', 'pune', 'M'));
    }

    this.get = function (x) {
        return this.users;
    }

    this.login = function (user) {
        if (!user) return undefined;

        return this.users.find((item) => {
            if (item.userName === user.userName && item.password === user.password) return item;
        })
    }

    this.updateUser = function (user) {
        let users = this.users;
        let indexofUser = users.findIndex((item) => {
            if (item.id == user.id) return item;
        })

        users.splice(indexofUser, 1, user);
        return user;
    }

    this.updateTodo = function (userId, todoId) {
        let users = this.users;
        let indexofUser = users.findIndex((item) => {
            if (item.id == userId) return item;
        })
        if (indexofUser > -1) {
            let user = angular.copy(users[indexofUser]);
            user.todo.push(todoId);
            this.users.splice(indexofUser, 1, user);
            AuthService.setUser(user);
        }

    }
    this.deleteUserTodo = function (userId, todoId) {
        let users = this.users;
        let indexofUser = users.findIndex((item) => {
            if (item.id == userId) return item;
        })
        if (indexofUser > -1) {
            let user = angular.copy(users[indexofUser]);
            if (user.todo.includes(todoId)) {
                user.todo.splice(user.todo.indexOf(todoId), 1);
                this.users.splice(indexofUser, 1, user);
                AuthService.setUser(user);
            }
        }
    }

    this.register = function (user) {
        if (!user) return false;

        this.users.push(new User(user.userName, user.password, user.email, user.firstName, user.lastName, user.address, user.gender));
        console.log(this.users);
        return true;
    }

}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {

var Todo = (function () {
    var id = 1;
    return function Todo(todo) {
        this.id = id++;
        this.name = todo.name;
        this.categories = todo.categories;
        this.description = todo.description;
        this.date = todo.date ? todo.date : new Date();
        this.isReminder = todo.isReminder;
        this.reminderDate = todo.reminderDate;
        this.isPublic = todo.isPublic;
        this.pic = ''
        this.isCompleted = this.isCompleted;
    }
})();

angular.module('angulardemo').service('TodoService', ['DataService', function (DataService) {
    var Todos = [];

    this.insertTodo = function (todo, userId) {
        let newTodo = new Todo(todo, userId);
        Todos.push(newTodo);
        DataService.updateTodo(userId, newTodo.id);
    }

    this.getUserTodos = function (todoIds) {
        return Todos.filter((todo) => {
            if (todoIds.includes(todo.id) || todo.isPublic) return todo;
        })
        return Todos
    }

    this.getUserTodoByStartEndDate = function (todoIds, startDate, endDate) {
        if (!startDate) {
            startDate = new Date();
        }
        if (!endDate) {
            endDate = new Date();
        }
        return Todos.filter((todo) => {
            if (todoIds.includes(todo.id) || todo.isPublic) {
                if (new Date(todo.date) >= new Date(startDate) && new Date(todo.date) <= new Date(endDate)) {
                    return todo;
                }
            }

        })
    }

    this.updateTodo = function (todo) {
        let index = Todos.findIndex((item) => {
            if (item.id == todo.id) return item;
        })
        Todos.splice(index, 1, todo);
    }

    this.getTodo = function (todoId) {
        return Todos.find((item) => {
            if (item.id == todoId) return item;
        })
    }

    this.deleteTodo = function (userId, todoId) {
        let index = Todos.findIndex((item) => {
            if (item.id == todoId) return item;
        })
        Todos.splice(index, 1);
        DataService.deleteUserTodo(userId, todoId);

    }
    Todos.push(new Todo({
        name: 'asdf',
        categories: ['work'],
        description: '',
        isPublic: true,
        isReminder: false,
        date: new Date().setDate(1)
    }));
    Todos.push(new Todo({
        name: 'zxcds',
        categories: ['work'],
        description: '',
        isPublic: false,
        isReminder: false
    }));
    Todos.push(new Todo({
        name: 'ghhff',
        categories: ['work'],
        description: '',
        isPublic: true,
        isReminder: false
    }));
    Todos.push(new Todo({
        name: 'bopdfsdf',
        categories: ['work', 'other'],
        description: '',
        isPublic: false,
        isReminder: false,
    }));

}])

/***/ }),
/* 8 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('caret', function ($compile) {
    // var getElement = function (key) {
    //     return `<span ng-if="order['key']==keyname">
    //         <i ng-if="order[keyname]" class="fa fa-caret-down"></i>
    //         <i ng-if="!order[keyname]" class="fa fa-caret-up"></i>
    //     </span>`
    // }

    return {
        restrict: 'AE',
        template: `<span ng-if="order['key']==keyname">
                        <i ng-if="order[keyname]" class="fa fa-caret-down"></i>
                        <i ng-if="!order[keyname]" class="fa fa-caret-up"></i>
                    </span>`,
        scope: {
            order: '=',
            keyname: '@'
        }
    }
})

/***/ }),
/* 9 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('deletePermission', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            if(!scope.$parent.$parent.vm.logedInUser.todo.includes(scope.todo.id)){
                angular.element(elem).attr('disabled',true)
            }
        }
    }
})

/***/ }),
/* 10 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive("fileInput", function () {
    return {
        require: "ngModel",
        link: function postLink(scope, elem, attrs, ngModel) {
            elem.on("change", function (e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
})

/***/ }),
/* 11 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('fileUpload', () => {
    return {
        restrict: 'E',
        template: `<input type="file" id='fileUpload' file-Input style="visibility:hidden" ng-model="file" ng-change="fileUpload()">`,
        scope: {
            file: '=',
            fileUpload: '&'
        },
        link: function (scope) {
            scope.fileUpload = function () {
                scope.$parent.fileUpload(scope.file);
            };
        }
    };
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('formattedDate', function (dateFilter) {
    return {
        require: 'ngModel',
        scope: {
            format: "@"
        },
        link: function (scope, element, attrs, ngModelController) {
            ngModelController.$parsers.push(function (data) {
                //convert data from view format to model format
                return dateFilter(data, scope.format); //converted
            });

            ngModelController.$formatters.push(function (data) {
                //convert data from model format to view format
                return dateFilter(data, scope.format); //converted
            });
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('listTodo', function () {
    return {
        restrict: 'EA',
        template: `<tr>
                    <td>{{todo.id}}</td>
                    <td>{{todo.name}}</td>
                    <td>{{todo.date | date:'dd/MM/yyyy'}}</td>
                    <td>{{todo.description}}</td>
                    <td>{{todo.categories.join(', ')}}</td>
                    <td class="text-center">
                    <img onclick="document.getElementById('fileUpload').click()" class="img-div" width="35" height="35" ng-src="{{vm.todo.pic?vm.todo.pic:'assets/img/noimg.png'}}">
                    </td>
                    <td>{{todo.isPublic?'Yes':'No'}}</td>
                    <td>{{todo.isCompleted?'Yes':'No'}}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" ng-click="vm.editTodo(todo.id)"><i class="fa fa-pencil"></i></button>
                        <button type="button" delete-permission ng-attr-title="{{todo.isPublic?'only owner can delete public todos':null}}" class="btn btn-outline-danger" ng-click="vm.openModal(todo.id)"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>`,
        replace: true
    }
})

// 

/***/ }),
/* 14 */
/***/ (function(module, exports) {

angular.module('angulardemo').directive('noInput', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            angular.element(elem).on('keypress', function (event) {
                event.preventDefault();
            })
        }
    }
})

/***/ }),
/* 15 */
/***/ (function(module, exports) {

angular.module('angulardemo').factory('base64', function ($q) {
    var base64 = {};
    base64.encode = function (file) {
        var fileDefer = $q.defer();
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            fileDefer.resolve(reader.result)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        return fileDefer.promise;
    }

    return base64;
})

/***/ }),
/* 16 */
/***/ (function(module, exports) {

angular.module('angulardemo').filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

angular.module('angulardemo').filter('todofilter', function () {

    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (input, key, value) {
        return input.filter((item) => {
            if (key == 'name') {
                if (item.name.indexOf(value) > -1) return item;
            } else if (key == 'categories') {
                if (item.categories && item.categories.includes(value)) return item;
            } else if (key == 'isPublic' || key == 'isCompleted') {
                if (value == 'yes') {
                    if (item[key]) return item;
                } else {
                    if (!item[key]) return item;
                }
            }
        })

    }

});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

angular.module('home.module', [
    'profile.module',
    'todo.module',
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'app.home',
                url: 'home',
                templateUrl: './modules/home/home.html',
                params: {
                    user: undefined
                }
            });
    }])
    .controller('homeController',
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
            vm.startDate = '';
            vm.endDate = '';
            $scope.order = [];
            $scope.order['key'] = 'name';
            $scope.order['name'] = false;
            $scope.order['isPublic'] = false;
            $scope.order['isCompleted'] = false;
            vm.uibmodal;


            if (vm.logedInUser)
                vm.todos = TodoService.getUserTodos(vm.logedInUser.todo, vm.startDate, vm.endDate);

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

            vm.getTodosBYStartEndDate = function () {
                vm.todos = TodoService.getUserTodoByStartEndDate(vm.logedInUser.todo, vm.startDate, vm.endDate);
            }

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
                console.log($scope.order);
            };

            vm.clearFilters = function () {
                vm.filter = {
                    value: '',
                    key: 'name'
                }
                vm.todos = TodoService.getUserTodos(vm.logedInUser.todo);
            }


        }]);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('profile.module', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.
            state({
                name: 'app.profile',
                url: 'profile',
                templateUrl: './modules/profile/profile.html'
            });
    }])
    .controller('profileController',
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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

angular.module('todo.module', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'app.todo',
                url: 'todo/{id}',
                templateUrl: './modules/todo/todo.html',
            });
    }])
    .controller('todoController',
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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

angular.module('login.module', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'login',
                url: '/login',
                views: {
                    'main': { templateUrl: './modules/login/login.html' }
                }
            })
    }])

    .controller('loginController',
    ['$scope', 'DataService', '$state', 'AuthService', 'toaster',
        function ($scope, DataService, $state, AuthService, toaster) {
            var vm = this;
            vm.title = "Login";
            vm.loginCredentials = {
                userName: 'parth',
                password: '12'
            }
            vm.login = function () {
                let user = DataService.login(vm.loginCredentials);
                if (!user) {
                    console.log("invalid credentials");
                    toaster.pop('error', '', 'Invalid Credentials');
                    return;
                };

                AuthService.setUser(user);
                $state.go('app.home', { user: user });
            }
        }]);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

angular.module('register.module', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.
            state({
                name: 'register',
                url: '/register',
                views: {
                    'main': { templateUrl: './modules/register/register.html' }
                }
            });
    }])

    .controller('registerController', ['$scope', 'DataService', '$state', function ($scope, DataService, $state) {
        var vm = this;
        vm.title = "Register";
        vm.registration = {};

        vm.checkCpassword = function () {
            if (vm.registration.password !== vm.registration.c_password) {
                $scope.registration.c_password.$setValidity("c_password", false);
            } else {
                $scope.registration.c_password.$setValidity("c_password", true);
            }
        }
        vm.register = function () {
            delete vm.registration.c_password;
            let registration = DataService.register(vm.registration);
            if (registration) {
                $state.go('login');
            }
        }
    }]);

/***/ })
/******/ ]);