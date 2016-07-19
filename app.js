(function(){

    angular.module('myApp', [
        'ui.router'
    ])
        .config (myAppConfig);
    
    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }
})();




