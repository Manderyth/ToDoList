(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', ['ui.router'])
        .config ([$stateProvider, function ($stateProvider) {

            var grocery = {
                url: 'ComponentOneA/ComponentOneA.html',
                controller: 'GroceryCtrl'
            },

            shopping = {
                url: 'ComponentTwo/ComponentTwo.html',
                controller: 'ShoppingCtrl'
            }
        }])

            $stateProvider
                .state ('grocery', grocery)
                .state ('shopping', shopping);

})();



/* Old Way

(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', ['ui.router'])
        .config ([$stateProvider, function ($stateProvider) {

            var grocery = {
                    url: 'ComponentOneA/ComponentOneA.html',
                    controller: 'GroceryCtrl'
                },

                shopping = {
                    url: 'ComponentTwo/ComponentTwo.html',
                    controller: 'ShoppingCtrl'
                }
        }])

    $stateProvider
        .state ('grocery', grocery)
        .state ('shopping', shopping);

})();

*/
