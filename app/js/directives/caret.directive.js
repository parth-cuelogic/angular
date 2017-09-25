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