//since ITodoService and Todo are in different namespaces
//we need to use Todo giving its full "path" as below

//Importing using "CommonJS syntax"
// import Model = require("./model");
// import Todo = Model.Todo;

//The same as above, but in one line using the another syntax
import { Todo } from "./model";

export interface ITodoService {
    add(todo: Todo): void;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

let _lastId: number = 0;

function generateId() {
    const id = _lastId + 1;
    _lastId++; //incrementing for the next call.
    return id;
}

export class TodoService implements ITodoService {
    constructor(private todos: Todo[]) { }

    add(todo: Todo): void {
        todo.id = generateId();
        this.todos.push(todo);
    }

    delete(todoId: number): void {
        const toDelete = this.getById(todoId);
        const toDeleteIndex = this.todos.indexOf(toDelete);
        this.todos.splice(toDeleteIndex, 1);
    }

    getAll(): Todo[] {
        const clone = JSON.stringify(this.todos);
        return JSON.parse(clone);
    }

    getById(todoId: number): Todo {
        const todoFound = this.todos.find(t => t.id === todoId);
        return todoFound ? todoFound : null;
    }
}
