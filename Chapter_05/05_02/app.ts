//Using prototype ...
/*
function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}
*/

//Using Class
class TodoService {
    constructor(private todos: Todo[]) {
        this.todos = todos;
    }

    getAll(): Todo[] {
        return this.todos;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active = 2,
    Completed = 3,
    Deleted = 4
};