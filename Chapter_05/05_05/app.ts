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

class TodoStateChanger {
    constructor(private newState: TodoState) {
    }

    //Subclass should implement this method
    canChangeState(todo: Todo) : boolean {
        return todo ? true : false;
    }

    changeState(todo: Todo): Todo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}

class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Completed);
    }
    
    /**
     * @override
     */
    canChangeState(todo: Todo): boolean {
        return super.canChangeState(todo) &&
            (todo.state === TodoState.Active || todo.state === TodoState.Deleted);
    }
}
