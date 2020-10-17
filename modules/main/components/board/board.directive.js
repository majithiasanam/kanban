function Board() {
    return {
        templateUrl: 'board.tpl.html',
        controller: 'BoardController',
        controllerAs: 'BoardCtrl',
        restrict: 'AE',
        replace: true,
        scope: {},
        bindToController: {}
    };
}

angular
.module('kanbanMain')
.directive('board', Board);