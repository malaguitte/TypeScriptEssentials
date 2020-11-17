interface Todo {
    name: string,
    state: TodoState
};

enum TodoState {
    New = 1,
    Active = 2,
    Completed = 3,
    Deleted = 4
};

const todo: Todo = { 
    name: "Wash dishes!", 
    state: TodoState.New 
};

//function example using enum
function deleteTodo(todo: Todo): void {
    if (todo.state !== TodoState.Completed) {
        throw "Cannot delete todo that is not completed.";
    }
    //delete todo...
}