var routerApp = angular.module("routerApp", ["ui.router"]);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state("home", {
    url: "/home",
    templateUrl: "main.html",
    controller: "mainController",
    controllerAs: "main"
  })
  .state("contact", {
    url: "/contact",
    templateUrl: "contact.html",
    controller: "contactController",
    controllerAs: "contact"
  });
});

routerApp.controller("mainController", function() {
  var that = this;
  that.message = "Main page message";
});

routerApp.controller("contactController", function() {
  var that = this;
  that.message = "Contact page message";
});
