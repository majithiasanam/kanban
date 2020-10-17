function TaskCard() {
    return {
        templateUrl: 'task.tpl.html',
        controller: 'TaskCardController',
        controllerAs: 'taskCtrl',
        restrict: 'AE',
        replace: true,
        bindToController: {
            'status': '=',
            'description': '=',
            'dueDate': '=',
            'assignee': '='
       }
    };
}

angular
.module('kanbanMain')
.directive('taskCard', TaskCard);