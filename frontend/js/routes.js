app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/welcome.html',
            controller: 'WelcomeController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
