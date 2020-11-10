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