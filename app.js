(function(){

    angular.module('myApp', [
        'ui.router',
        'ngStorage',
        'ngAnimate',
        'toaster'
    ])
        .config (myAppConfig);
    
    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }
})();




