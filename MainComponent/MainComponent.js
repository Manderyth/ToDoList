(function() {
    
    angular.module('myApp')
        .component('mainComp', {
            templateURL: "MainComponent/MainComponent.html",
            controller: ToDoController
    })
        .config(toDoListConfig);
    
    function toDoListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<main-comp></main-comp>'
        });
    }
    
    function ToDoController() {
        var self = this;
        
    }
    
})();


























/*
(function(){

    angular.module('myApp')
        .component('componentOne', {
            transclude: true,
            templateUrl: "ComponentOne/ComponentOne.html",
            controller: myViewController
        });
    
            function myViewController() {
                var $ctrl = this;

                 $ctrl.views = [];

                $ctrl.select = function(windowview) {
                    angular.forEach($ctrl.views, function(comp) {
                        comp.selected = false;
                    });
                    windowview.selected = true;
                };

                $ctrl.addView = function(windowview) {
                    if ($ctrl.views.length === 0) {
                        $ctrl.select(windowview);
                    }
                    $ctrl.views.push(windowview);
                };
            }
})();
*/
