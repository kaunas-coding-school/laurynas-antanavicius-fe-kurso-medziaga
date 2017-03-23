var app = angular.module('todoApp', []);

app.controller('TodoListController', function () {
    var that = this;

    that.name = "Laurynas";
    that.surname = "Antanavicius";

    that.change = function () {
        that.name = "Petras";
    };

});
