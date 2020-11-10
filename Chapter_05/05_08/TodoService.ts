class TodoService implements InterfaceTodoService, InterfaceIdGenerator {
    private static lastId: number = 0;

    constructor(private todos: Todo[]) {}

    get nextId() {
        return TodoService.lastId + 1;
    }

    set nextId(id) {
        TodoService.lastId  = id - 1;
    }
    
    public add(todo: Todo): void {
        todo.id = this.nextId;
        this.todos.push(todo);
    }

    public getAll() : Todo[] {
        const dataCopy = JSON.stringify(this.todos);
        return JSON.parse(dataCopy);
    }

    public getById(todoId: number): Todo {
        const todoFound = this.todos.find(t => t.id === todoId);
        if (todoFound) {
            return todoFound;
        }
        return null;
    }

    public delete(todoId: number): void {
        const todoToBeDeleted = this.getById(todoId);

        if (todoToBeDeleted !== null) {
            //remove item
            const indexToRemove = this.todos.indexOf(todoToBeDeleted);
            this.todos.splice(indexToRemove, 1);
        }
    } 
}
