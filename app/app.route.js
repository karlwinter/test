/**
 * @author Karl Winter
 * @date 10/11/14.
 */

myApp.config(['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

        $stateProvider.state('signin', {
            url: '/signin',
            templateUrl: 'app/components/user/signinView.html',
            controller: 'SigninController'
        }).state('signup', {
            url: '/signup/{email:.*}',
            templateUrl: 'app/components/user/signupView.html',
            controller: 'SignupController'
        }).state('home', {
            url: '/{alert:.*}',
            templateUrl: 'app/components/home/homeView.html',
            controller: 'HomeController'
        });

        $urlRouterProvider.otherwise('/home');

//        $locationProvider.html5Mode(true);
//        $httpProvider.defaults.useXDomain = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
