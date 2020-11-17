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

let todo = {
    name: "Wash the dishes",
    
    get state() {
        return this._state;
    },

    set state(newState) {

        if (newState === TodoState.Completed) {
            const canCompleteTodo = this._state === TodoState.Active || 
                                    this.state === TodoState.Deleted;
            
            if (!canCompleteTodo) {
                throw "Todo must be Active or Deleted in order to be marked as Completed";
            }
        }

        this._state = newState;
    }
}

//using set state
todo.state = TodoState.Completed;
//using get state
todo.state;

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

class SmartTodo {
    name: string;
    _state: TodoState;

    constructor(name: string) {
        this.name = name;
    }

    get state() {
        return this._state;
    }

    set state(newState) {

        if (newState === TodoState.Completed) {
            const canCompleteTodo = this._state === TodoState.Active || 
                                    this.state === TodoState.Deleted;
            
            if (!canCompleteTodo) {
                throw "Todo must be Active or Deleted in order to be marked as Completed";
            }
        }

        this._state = newState;
    }
}

let smartTodo = new SmartTodo("Wash dishes");
//using set
todo.state = TodoState.Completed; //should fail
//using get
todo.state;
