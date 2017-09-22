app.factory('base64', function ($q) {
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