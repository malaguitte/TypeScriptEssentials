interface InterfaceTodoService {
    add(todo: Todo): void;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

interface InterfaceIdGenerator {
    nextId: number;
}

interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active = 2,
    Completed = 3,
    Deleted = 4
};