(function(){

    angular.module('myApp', [
        'ui.router',
        'ngStorage',
        'ngAnimate',
        'ngMaterial'
    ])
        .config (myAppConfig);
    
    function myAppConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/MainComponent');


        $stateProvider
            .state('MainComponent', {
                url: '/MainComponent',
                template: '<main-comp></main-comp>'
            })

            .state('about', {
                url: '/about',
                template: '<about></about>'
            })
    }
})();




