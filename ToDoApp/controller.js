angular.module('maintenance', [])
    .controller('todoEditCtrl', TodoEditCtrl);

function TodoEditCtrl($scope) {
    $scope.todos = todos;
    $scope.startAdd = startAdd;
    $scope.cancel = cancel;
    $scope.add = add;
    $scope.startEdit = startEdit;
    $scope.save = save;
    $scope.startRemove = startRemove;
    $scope.remove = remove;
    $scope.getSelected = getSelected;

    setView('list');

    function setView(view) {
        $scope.view = view;
    }

    function startAdd(){
        $scope.todoBox = '';
        setView('add');
    }

    function cancel() {
        setView('list');
    }

    function add() {
        $scope.todos.push($scope.todoBox);
        setView('list');
    }

    function startEdit(index) {
        selected = index;
        $scope.todoBox = $scope.todos[index];
        setView('edit');
    }

    function save() {
        $scope.todos[selected] = $scope.todoBox;
        setView('list');
    }

    function startRemove(index) {
        selected = index;
        setView('delete');
    }

    function remove() {
        $scope.todos.splice(selected, 1);
        setView('list');
    }

    function getSelected() {
        return todos[selected];
    }
}
