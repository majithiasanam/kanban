function BoardColumn() {
    return {
        templateUrl: 'column.tpl.html',
        controller: 'ColumnController',
        controllerAs: 'columnCtrl',
        restrict: 'AE',
        replace: true,
        scope: {},
        bindToController: {
            'status': '='
        }
    };
}

angular
.module('kanbanMain')
.directive('boardColumn', BoardColumn);