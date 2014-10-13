/**
 * @author Karl Winter
 * @date 10/11/14.
 */

myApp.factory('UserModel', [
    function () {
        return {
            default: {
                name: "",
                email: "",
                code: ""
            }
        }
    }
]);