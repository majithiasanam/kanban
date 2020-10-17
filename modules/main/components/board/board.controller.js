function BoardController(STATUS, USERS) {
    
    var thisController = this;

    thisController.columns = STATUS;
    thisController.users = USERS;
}

angular
.module('kanbanMain')
.controller('BoardController', ['STATUS', 'USERS', BoardController]);