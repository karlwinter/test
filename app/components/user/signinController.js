/**
 * @author Karl Winter
 * @date 10/11/14
 */

myApp.controller('SigninController', ['$scope', '$state', 'UserModel', 'UserService',
    function ($scope, $state, UserModel, UserService) {
        $scope.alert = "";
        $scope.user = angular.copy(UserModel.default);

        /**
         * Performs sign in
         */
        $scope.doSignIn = function () {
            UserService.verifyUser($scope.user).success(function (data) {
                $scope.meessage = null;

                if (data === 'true') {
                    $state.go('signup', { email: $scope.user.email });
                } else {
                    $scope.alert = "Failed to verify the user by email and code provided";
                }
            }).error(function (data) {
                $scope.alert = data;
            });
        }
    }
]);
