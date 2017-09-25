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