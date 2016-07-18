(function () {
    var app = angular.module('myApp')
        .component('shoppingList', {
        templateUrl: 'ComponentTwo/ComponentTwo.html'
    })

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

