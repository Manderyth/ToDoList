(function () {
    angular.module('myApp')
        .component('componentDetail', {
            templateUrl: 'ComponentDetail/ComponentDetail.html',
            bindings: {
                list: "="
            },
            controller: listController,
            controllerAs: 'vm'

        });


    function listController() {
        var self = this;
        self.shoppingList = self.list.detail;


        self.shoppingAdd = function () {
            self.shoppingList.push({name: self.listInput, detail: [{shoppingText: self.shoppingInput}]});
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

