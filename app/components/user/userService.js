/**
 * @author Karl Winter
 * @date 10/11/14.
 */

myApp.factory('UserService', ['$http', '$q', 'appConfig',
    function ($http, $q, appConfig) {
        return {
            /**
             * Gets a user by email
             *
             * @param email {String} Email of user to retrieve
             * @returns {HttpPromise}
             */
            getUserByEmail: function(email) {
                var url = appConfig.apiBaseUrl + "/user/" + email;

                return $http.get(url);
            },

            /**
             * Gets a user by name
             *
             * @param name {String} Name of user to retrieve
             * @returns {HttpPromise}
             */
            getUserByName: function(name) {
                var url = appConfig.apiBaseUrl + "/user/" + name;

                return $http.get(url);
            },

            /**
             * Creates a user
             *
             * @param data {Object} Data of user: name, email, code
             * @returns {HttpPromise}
             */
            createUser: function(data) {
                var url = appConfig.apiBaseUrl + "/createUser";

                return $http.post(url, data);
            },

            /**
             * Updates a user
             *
             * @param data {Object} Data of user: name, email, code
             * @returns {HttpPromise}
             */
            updateUser: function(data) {
                var url = appConfig.apiBaseUrl + "/user/" + data.email;

                return $http.put(url, data);
            },

            /**
             * Verifies a user
             *
             * @param data {Object} Data of user: email, code
             * @returns {HttpPromise}
             */
            verifyUser: function(data) {
                var url = appConfig.apiBaseUrl + "/verifyUser";

                return $http.post(url, data);
            }
        }
    }
]);