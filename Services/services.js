(function(){
angular.module('myApp')
    .service('todoService', function () {

        var self = this;
        
        var list = [
            {'name': 'Grocery',
                'detail' : ['test1', 'test2']
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
        
        self.getLists = function() {
            return list;
        };

        self.startAdd = function(newItem) {
            list.push (newItem);
        };

        self.shoppingAdd = function (theListToAddTo, textName) {
            theListToAddTo.detail.push({shoppingText: textName, done:false});
            
        };
    });

})();
