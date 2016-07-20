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
    
    function ToDoController() {
        var self = this;
        self.orderBy = '';
        self.selectedList = undefined;
        self.listInput = undefined;
        self.selectList = selectList;
        self.closeDetail = closeDetail;
        self.startAdd = startAdd;
                
        function selectList(list) {
            self.selectedList = list;
        }
        
        function closeDetail() {
            self.selectedList = undefined;
        }

        function startAdd () {
            self.list.push ({name: self.listInput, detail: []});
        }

        self.list = [
            {'name': 'Grocery',
              'detail' : []
            },

            {'name': 'Shopping',
                'detail' : []
            },

            {'name': 'Yardwork',
                'detail' : []
            },

            {'name': 'Home Improvement',
                'detail' : []
            },

            {'name': 'Misc',
                'detail' : []
            }
        ];
        
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

