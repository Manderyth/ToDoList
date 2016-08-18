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
            todoService.showToaster(shoppingInput);
        };
        
        self.remove = function(list, task){
            todoService.remove(list, task);
        };

        self.removeSelected = function (selList){
            todoService.removeSelected(selList);
        };
    }

})();

