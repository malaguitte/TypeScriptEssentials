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

abstract class TodoStateChanger {
    constructor(private newState: TodoState) {
    }

    //Subclass should implement this method
    abstract canChangeState(todo: Todo) : boolean;

    changeState(todo: Todo): Todo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}

//The line below does not work since we cannot create an instance of an abstract class
// new TodoStateChanger();

class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Completed);
    }
    
    /**
     * @override
     */
    canChangeState(todo: Todo): boolean {
        return todo && 
                (todo.state === TodoState.Active || 
                todo.state === TodoState.Deleted);
    }
}

