
import { Todo, TodoState } from "./Model";
import { ValidatableTodo } from "./Validators";

export interface ITodoService {
    add(todo: Todo): void;
    add(todo: string): void;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}

let _lastId = 0;
function generateTodoId(): number {
    return _lastId += 1;
}

function clone<T>(src: T): T {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
};

class TodoService implements ITodoService {
    
    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if (todos?.length > 0) {
            todos.forEach(todo => this.add(todo));
        }
    }

    // Accepts a todo name or todo object
    add(todo: Todo): void
    add(todo: string): void
    @log
    add(input): void {

        const todo = new ValidatableTodo();
        todo.id = generateTodoId();
        todo.state = TodoState.Active;

        if (typeof input === "string") {
            todo.name = input;
        } else if (typeof input.name === "string") {
            todo.name = input.name;
        } else {
            throw "Invalid Todo name!";
        }

        const errors = todo.getValidationErrors();
        if (errors?.length > 0) {
            const errorMessage = errors.map(error => `${error.property}: ${error.message}`);
            throw `Invalid Todo. Error(s): ${errorMessage}`;
        }

        this.todos.push(todo);
    };


    clearCompleted(): void {
        //leave only Active todos.
        this.todos = this.todos.filter(todo => todo.state === TodoState.Active);
    }

    getAll(): Todo[] {
        return clone(this.todos);
    };

    getById(todoId: number): Todo {
        const todo = this._find(todoId);
        return clone(todo);
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

/**
 * Decorator Example
 */
/*
TodoService.prototype.add = function(...args) {
    console.log(`add(${JSON.stringify(args)})`);
    const returnValue = originalMethod.apply(this, args);
    console.log(`add(${JSON.stringify(args)}) => ${returnValue}`);
    return returnValue;
}
*/


/**
 * Decorator Example Using TS
 */
function log(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`${methodName}(${JSON.stringify(args)})`);
        const returnValue = originalMethod.apply(this, args);
        return returnValue;
    }
}

export default TodoService;