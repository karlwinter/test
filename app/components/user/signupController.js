/**
 * @author Karl Winter
 * @date 10/11/14
 */

myApp.controller('SignupController', ['$scope', '$state', '$stateParams', '$log', 'UserModel', 'UserService',
    function ($scope, $state, $stateParams, $log, UserModel, UserService) {
        $scope.alert = "";
        $scope.user = angular.copy(UserModel.default);
        $scope.state = "CREATE";

        /**
         * Init the controller
         */
        $scope.init = function() {
            // If the email is set in param, get user
            if (typeof $stateParams.email !== "undefined" && $stateParams.email !== "") {

                $scope.user.email = $stateParams.email;

                UserService.getUserByEmail($scope.user.email).success(function(data) {

                    if (data !== "false") {
                        $scope.alert = "";
                        $scope.user = data;
                        $scope.state = "UPDATE";
                    } else {
                        $scope.alert = "Couldn't find a user by email provided";
                    }
                }).error(function(data) {
                    $log.log("Error in finding a user by email");
                });
            }
        }

        $scope.doSignUp = function () {

            if ($scope.state == "CREATE") { // If state is CREATE, create new user
                UserService.createUser($scope.user).success(function(data) {
                    if (data.status === "success") {
                        $state.go("home", { alert: encodeURIComponent("User has been successfully created") });
                    } else {
                        $scope.alert = "Failed to create the user";
                    }
                }).error(function(err) {
                    if (typeof err.message !== "undefined") {
                        $scope.alert = err.message;
                    } else {
                        $scope.alert = "Error in creating new user";
                    }
                });
            } else if ($scope.state == "UPDATE") { // If code is not set, update the user
                UserService.updateUser($scope.user).success(function(data) {
                    if (data === 'true') {
                        $state.go("home", { alert: encodeURIComponent("User has been successfully updated") });
                    } else {
                        $scope.alert = "Failed to update the user";
                    }
                }).error(function(err) {
                    if (typeof err.message !== "undefined") {
                        $scope.alert = err.message;
                    } else {
                        $scope.alert = "Error in updating the user";
                    }
                });
            } else {
                $scope.alert = "Invalid state";
            }
        }

        $scope.init();
    }
]);
