(function(){
angular.module('myApp')
    .service('todoService', function ($localStorage, $mdToast) {

        var self = this;

        var data;

        if ($localStorage.list) {
            list = $localStorage.list
        }
        else {
            list = [ ];
        }

        self.showToaster = showToaster;

        self.getLists = function () {
            return list;
        };

        self.startAdd = function (newItem) {
            list.push(newItem);
            $localStorage.list = list;
        };

        self.shoppingAdd = function (theListToAddTo, textName) {
            theListToAddTo.detail.push({shoppingText: textName, done: false});
            $localStorage.list = list;
        };

        self.saveToStorage = function() {

        };
        
        self.setLists = function (newList) {
            list = newList;
        };

        self.remove = function(listObj, taskObj){
            if (!taskObj) {
                var index = list.indexOf(listObj);
                list.splice(index, 1);
            }
            else {
                var index = listObj.detail.indexOf(taskObj);
                listObj.detail.splice(index, 1);
            }
        };

        self.removeSelected = function (selList) {
            var removedItems = [];
            for (var i = 0; i < selList.detail.length; i ++) {
                if (selList.detail[i].done === true) {
                    removedItems.push(selList.detail[i]);
                }
            }
            for(var i = 0; i < removedItems.length; i++) {
             var index = selList.detail.indexOf(removedItems[i]);
                selList.detail.splice(index, 1);
            }
        };

        function showToaster(item) {

            $mdToast.show(
                $mdToast.simple()
                    .textContent(item + ' created!')
                    .position('bottom right')
                    .hideDelay(3000)
            );

        }

            })


})();
