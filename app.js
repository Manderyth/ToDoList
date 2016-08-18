(function(){

    angular.module('myApp', [
        'ui.router',
        'ngStorage',
        'ngAnimate',
        'ngMaterial'
    ])
        .config (myAppConfig);
    
    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }
})();




