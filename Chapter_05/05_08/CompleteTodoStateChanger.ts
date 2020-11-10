class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Completed);
    }
    
    /**
     * @override
     */
    canChangeState(todo: Todo): boolean {
        return todo && 
                (todo.state === TodoState.Active || 
                todo.state === TodoState.Deleted);
    }
}
