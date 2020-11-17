interface Todo {
    name: string,
    completed?: boolean //optional
};

interface TodoService {
    getAll(): Todo[];
    getById(id: number): Todo;
    delete(id: number): void;
    add(todo: Todo): void;
}

// const todo = <Todo>{};

const todo: Todo = { name: "Wash clothes" };