import { Todo } from "./Model";
export interface ITodoService {
    add(todo: Todo): void;
    add(todo: string): void;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): void;
    add(todo: string): void;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
    private _find;
}
export default TodoService;
