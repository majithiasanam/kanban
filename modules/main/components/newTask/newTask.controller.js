function NewTaskController(status, $uibModalInstance) {

    var thisController = this;
    thisController.status = status;
}

angular
.module('kanbanMain')
.controller('NewTaskController', ['status', '$uibModalInstance', NewTaskController]);