app.directive("usesSimpleLogin", function () {
    return {
        controller: ["$scope", "simpleLogin", function ($scope, simpleLogin) {
            $scope.simpleLogin = simpleLogin;
        }]
    }
});