(function() {
    
    angular.module('myApp')
        .component('mainComp', {
            templateUrl: "MainComponent/MainComponent.html",
            controller: ToDoController,
            controllerAs: 'vm'
    })
        .config(toDoListConfig);
    
    function toDoListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<main-comp></main-comp>'
        });
    }
    
    function ToDoController(todoService) {
        var self = this;
        //self.orderBy = '';
        self.selectedObj = undefined;
        self.listInput = undefined;
        self.selectList = selectList;
        self.closeDetail = closeDetail;
        self.startAdd = startAdd;

        self.$onInit = function() {
            self.list = todoService.getLists();
        };
                
        function selectList(obj) {
            self.selectedObj = obj;
        }
        
        function closeDetail() {
            self.selectedList = undefined;
        }

        function startAdd (input) {
            todoService.startAdd({name: input, detail: []});
            self.listInput = undefined;
        }
        
        self.delete = function (theObj) {
            todoService.remove(theObj)
        }
        

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

