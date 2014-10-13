/**
 * @author Karl Winter
 * @date 10/11/14
 */

myApp.controller('HomeController', function($scope, $state, $stateParams) {
    $scope.alert = "";

    /**
     * Init the controller
     */
    $scope.init = function() {
        // Check the alert string provided
        if (typeof $stateParams.alert !== "undefined") {
            $scope.alert = decodeURIComponent($stateParams.alert);
        }
    }

    /**
     * Redirect to signin page
     */
    $scope.signin = function() {
        $state.go("signin");
    }

    /**
     * Redirect to signup page
     */
    $scope.signup = function() {
        $state.go("signup");
    }



    $scope.init();
});
