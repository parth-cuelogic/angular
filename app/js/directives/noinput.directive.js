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