function TaskFactory(STATUS) {
    var lastTaskId = 1;

    class Task {
        constructor(status, description, dueDate, assignee) {
            Object.assign(this, {
                id: lastTaskId, status, description, dueDate, assignee
            });
            lastTaskId++;
        }
    }

    this.createTask = function(status, description, dueDate, assignee) {
        return new Task(status, description, dueDate, assignee);
    }
}

angular
.module('kanbanMain')
.factory('TaskFactory', ['STATUS', TaskFactory]);