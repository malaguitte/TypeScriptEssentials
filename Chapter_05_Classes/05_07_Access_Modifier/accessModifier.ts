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

class TodoService {
    private static lastId: number = 0;

    constructor(private todos: Todo[]) {}

    get nextId() {
        return TodoService.lastId + 1;
    }

    set nextId(id) {
        TodoService.lastId = id - 1;
    }
    
    public add(todo: Todo): void {

    }

    protected getAll() : Todo[] {
        return this.todos;
    }
}

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

class SmartTodo {
    constructor(public name: string) {
        this.name = name;
    }
}