namespace TodoApp.Model {
    export enum TodoState {
        New = 1,
        Active = 2,
        Completed = 3,
        Deleted = 4
    };
}

namespace TodoApp.Model {
    export interface Todo {
        id: number;
        name: string;
        state: TodoState;
    }
}
    
namespace DataAccess {

    //since ITodoService and Todo are in different namespaces
    //we need to use Todo giving its full "path" as below
    import Todo = TodoApp.Model.Todo;

    interface ITodoService {
        add(todo: Todo): void;
        delete(todoId: number): void;
        getAll(): Todo[];
        getById(todoId: number): Todo;
    }
}
