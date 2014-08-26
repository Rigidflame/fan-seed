app.controller("WelcomeController", ["$scope", "$firebase", "$firebaseSimpleLogin", "API", "ref", 
    function ($scope, $firebase, $firebaseSimpleLogin, API, ref) {
        
        $scope.greeting = "";
        
        $scope.$on("$firebaseSimpleLogin:login", function(e, user) {
            $scope.user = user;
        });
        
        $scope.$on("$firebaseSimpleLogin:logout", function(e, user) {
            $scope.greeting = "";
        });
    
        API.greeting("Person").then(function (greeting) {
            $scope.greeting = greeting;
        }); 
        
        $scope.submissions = $firebase(ref.child("submissions"));
    }
]);