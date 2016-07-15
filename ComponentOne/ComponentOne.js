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


/* Breaks the code
 (function(){
 angular.module('myApp')
 .component('componentOne', {
 transclude: true,
 templateUrl: "ComponentOne/ComponentOne.html"
 .controller('groceryCtrl', function ($scope) {
 $scope.message = "We are on the Grocery Page";
 })
 .controller('shoppingCtrl', function ($scope) {
 $scope.message = "We are on the Shopping Page";
 })
 });


 })();
 */