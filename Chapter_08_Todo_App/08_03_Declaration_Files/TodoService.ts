interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    Active = 1,
    Completed = 2
}

interface ITodoService {
    add(todo: Todo): void;
    add(todo: string): void;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}

class TodoService implements ITodoService {
    
    private static _lastId = 0;
    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if (todos?.length > 0) {
            todos.forEach(todo => this.add(todo));
        }
    }

    private static generateTodoId(): number {
        return TodoService._lastId += 1;
    }
    
    private static clone<T>(src: T): T {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };

    // Accepts a todo name or todo object
    add(todo: Todo): void
    add(todo: string): void
    add(input): void {
        const todo: Todo = {
            id: TodoService.generateTodoId(),
            name: null,
            state: TodoState.Active
        };

        if (typeof input === "string") {
            todo.name = input;
        } else if (typeof input.name === "string") {
            todo.name = input.name;
        } else {
            throw "Invalid Todo name!";
        }

        this.todos.push(todo);
    };


    clearCompleted(): void {
        //leave only Active todos.
        this.todos = this.todos.filter(todo => todo.state === TodoState.Active);
    }

    getAll(): Todo[] {
        return TodoService.clone(this.todos);
    };

    getById(todoId: number): Todo {
        const todo = this._find(todoId);
        return TodoService.clone(todo);
    };
    
    toggle(todoId: number): void {
        const todo = this._find(todoId);
        if (!todo) return;
        
        switch(todo.state) {
            case TodoState.Active:
                todo.state = TodoState.Completed;
                break;
                
            case TodoState.Completed:
                todo.state = TodoState.Active;
                break;
        }
    }

    private _find(todoId: number): Todo {
        const todoFound = this.todos.find(todo => todo.id === todoId);
        return todoFound ? todoFound : null;
    }
}