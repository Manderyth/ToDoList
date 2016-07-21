(function () {
    angular.module('myApp')
        .component('componentDetail', {
            templateUrl: 'ComponentDetail/ComponentDetail.html',
            bindings: {
                selectedObj: "="
            },
            controller: listController,
            controllerAs: 'vm'
        });


    function listController(todoService) {
        
        var self = this;

        self.shoppingAdd = function (selectedList, shoppingInput) {
            todoService.shoppingAdd(selectedList, shoppingInput);
            self.shoppingInput = " ";
        };

        self.remove = function () {
            var oldList = self.shoppingList;
            self.shoppingList = [];
            angular.forEach(oldList, function (x) {
                if (!x.done) self.shoppingList.push(x);
            });
        };
    }

})();

