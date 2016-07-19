(function () {
    var app = angular.module('myApp')
        .component('componentDetail', {
        templateUrl: 'ComponentDetail/ComponentDetail.html',
            bindings: {
                list: "="
            }
    });

    //var app = angular.module('myApp', [])
        app.controller('shoppingCtrl', function($scope) {
        $scope.shoppingList = [{shoppingText:'', done:false}];

        $scope.shoppingAdd = function() {
            $scope.shoppingList.push({shoppingText:$scope.shoppingInput, done:false});
            $scope.shoppingInput = " ";
        };

        $scope.remove = function() {
            var oldList = $scope.shoppingList;
            $scope.shoppingList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.shoppingList.push(x);
            });
        };
    });

})();

