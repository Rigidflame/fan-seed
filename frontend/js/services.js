app.service("simpleLogin", ["$firebaseSimpleLogin", "ref", function ($firebaseSimpleLogin, ref) {
    return $firebaseSimpleLogin(ref);
}]);

app.service("API", ["$rootScope", "$apibase", "apiRef", "apiMethods", "useSimpleLogin", function ($rootScope, $apibase, apiRef, apiMethods, useSimpleLogin) {
    var apibase = $apibase(apiRef, useSimpleLogin);
        
    apibase.setMethods(apiMethods)
    return apibase.API;
}]);