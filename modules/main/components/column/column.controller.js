function ColumnController(STATUS, $document, $uibModal, BoardContext) {
    var thisController = this;

    thisController.tasks = BoardContext.getTasksByStatus(thisController.status);

    thisController.addTask = function () {
        var modalInstance = $uibModal.open({
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "newTask.tpl.html",
            controller: "NewTaskController",
            controllerAs: "NewTaskCtrl",
            windowClass: 'task-modal',
            size: 'lg',
            backdrop: false,
            appendTo: angular.element(document.querySelector('.board')),
            resolve: {
                status: function () {
                    return thisController.status;
                },
            },
        });

        modalInstance.result.then(
            function (selectedItem) {
                $ctrl.selected = selectedItem;
            },
            function () {
                console.log("Modal dismissed at: " + new Date());
            }
        );
    };
}

angular
    .module("kanbanMain")
    .controller("ColumnController", [
        "STATUS",
        "$document",
        "$uibModal",
        "BoardContext",
        ColumnController,
    ]);
