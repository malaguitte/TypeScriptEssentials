/**
 * Static property using Prototype
 */
/*
function TodoService() {
}
TodoService.lastId = 0;
TodoService.prototype.add = function(todo) {
    const newId = TodoService.lastId;
    //incrementing the counter
    TodoService.lastId++;

    //do something else
}
*/

class TodoService {
    static lastId: number = 0;

    constructor(private todos: Todo[]) {
        this.todos = todos;
    }

    add(todo: Todo): void {
        const newId = TodoService.getNextId();
        //do something else...
    }

    getAll(): Todo[] {
        return this.todos;
    }

    //incrementing by one and returning the new value.
    static getNextId() {
        return TodoService.lastId += 1;
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


