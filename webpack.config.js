const webpack = require('webpack'),
    path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('./modules/', true, /\.js$/));
module.exports = {
    entry: {
        allFiles: [
            "./app/app.config.js",
            "./app/app.js",
            "./app/js/services/authentication.service.js",
            "./app/js/services/data.service.js",
            "./app/js/services/login.service.js",
            "./app/js/services/register.service.js",
            "./app/js/services/todo.service.js",
            "./app/js/directives/caret.directive.js",
            "./app/js/directives/deletepermission.directive.js",
            "./app/js/directives/fileinput.directive.js",
            "./app/js/directives/fileupload.directive.js",
            "./app/js/directives/formatedate.directive.js",
            "./app/js/directives/listtodos.directive.js",
            "./app/js/directives/noinput.directive.js",
            "./app/js/factories/base64.factory.js",
            "./app/js/filters/capitalize.filter.js",
            "./app/js/filters/todo.filter.js",
            "./app/modules/home/home.controller.js",
            "./app/modules/profile/profile.controller.js",
            "./app/modules/todo/todo.controller.js",
            "./app/modules/login/login.controller.js",
            "./app/modules/register/register.controller.js"
        ]
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     ecma: 2,
        //     output: {
        //         comments: false,
        //         beautify: false,
        //     }
        // })
    ]

};