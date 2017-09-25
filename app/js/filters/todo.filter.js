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