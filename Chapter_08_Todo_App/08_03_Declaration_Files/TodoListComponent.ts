declare var $: any;
declare var jQuery: any;

class TodoListComponent {
    private $el: jQuery;
    
    constructor(el: HTMLElement) {
        this.$el = $(el);
    }

    render(todos) {
        this.$el.html("");
        
        if (!todos.length) {
            const content = `
            <div class='list-group-item text-center text-giant'>
                <strong>You've completed everything you needed to do!</strong>
            </div>`;

            this.$el.html(content);
            return;
        }

        todos.forEach(todo => {
            this.renderTodo(todo).appendTo(this.$el);
        });
    }

    private renderTodo(todo) {
        const content = `
        <div class='todo-item list-group-item ${(todo.state === TodoState.Completed ? 'completed' : '')}'>
            <div class='row'>
                <div class='col-md-2 text-center'>
                    <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>
                    <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>
                </div>
                <div class='col-md-10'>
                    <span class='incomplete text-giant'>${todo.name}</span>
                    <span class='completed text-strikethrough text-muted text-giant'>${todo.name}</span>
                </div>
            </div>
            <div class='clearfix'></div>
        </div>`;
        const onClick = function() {
            const event = document.createEvent("CustomEvent");
            event.initCustomEvent("todo-toggle", true, true, { todoId: todo.id });
            this.dispatchEvent(event);
        };

        return $(content).on("click", onClick);
    }
}