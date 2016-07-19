(function () {
    var app = angular.module('myApp')
        .component('groceryList', {
        templateUrl: 'ComponentOneA/ComponentOneA.html'
    })

        .config(ListConfig);

    function ListConfig($stateProvider) {
        $stateProvider.state('component', {
            url: '/component',
            template: '<grocery-list></grocery-list>'
        });
    }

    //var app = angular.module('myApp', [])
        app.controller('groceryCtrl', function($scope) {
        $scope.groceryList = [{groceryText:'', done:false}];

        $scope.groceryAdd = function() {
            $scope.groceryList.push({groceryText:$scope.groceryInput, done:false});
            $scope.groceryInput = " ";
        };

        $scope.remove = function() {
            var oldList = $scope.groceryList;
            $scope.groceryList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.groceryList.push(x);
            });
        };
    });

})();

