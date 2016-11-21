var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html'
  })
  .when('/dashboard', {
    templateUrl: './partials/dashboard.html'
  })
  .when('/new_question', {
    templateUrl: './partials/new_question.html'
  })
  .when('/answer/:id', {
    templateUrl: './partials/new_answer.html'
  })
  .when('/show/:id', {
    templateUrl: './partials/show.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
