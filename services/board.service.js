function BoardContext(STATUS) {

    // Holds tasks in their respective state as a key value pair where
    // key = taskId and value = task
    var boardState = {
        [STATUS.PENDING]: {
            0: {
                status: STATUS.PENDING,
                assignee: 'Jenny',
                dueDate: '25 October 2020',
                description: 'Create a Kanban Board'
            },
            1: {
                status: STATUS.PENDING,
                assignee: 'James',
                dueDate: '1st November 2020',
                description: 'Planning for next sprint'
            }
        },
        [STATUS.IN_PROG]: {
            3: {
                status: STATUS.IN_PROG,
                assignee: 'Jane',
                dueDate: '8th November 2020',
                description: 'Design Review for new GST module'
            },
        },
        [STATUS.DONE]: {}
    };

    this.getAllTasks = function() {
        return boardState;
    }

    this.getTasksByStatus = function(status) {
        return boardState[status];
    }

    this.addTaskToColumn = function(task, status) {
        boardState[status][task.id] = task;
    }

    this.moveTaskToColumn = function(taskId, srcCol, targetCol) {
        boardState[targetCol][taskId] = boardState[srcCol][taskId];
        delete boardState[srcCol][taskId];
    }

}

angular
.module('kanbanMain')
.service('BoardContext', ['STATUS', BoardContext]);