var app = angular.module("app", ["ngRoute", "firebase", "apibase"]);

app.run(["$rootScope", "$apibase", "FB_URL", "API_PATH", function ($rootScope, $apibase, FB_URL, API_PATH) {
    var ref = new Firebase(FB_URL),
        apiRef = ref.child(API_PATH);
        
    $rootScope.apibase = $apibase(apiRef);
}]);