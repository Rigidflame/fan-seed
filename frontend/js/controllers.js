app.controller("WelcomeController", function ($scope) {
    
    $scope.greeting = "Loading...";
    
    $scope.apibase.$on("online", function (e, API) {
        API.greeting("Abe").then(function (greeting) {
            $scope.greeting = greeting;
        });   
    });
});