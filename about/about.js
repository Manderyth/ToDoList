(function() {

    angular.module('myApp')
        .component('about', {
            templateUrl: "about/about.html",
            controller: aboutController,
            controllerAs: 'vm'
        });
    
    function aboutController() {
        
    }
        
})();


