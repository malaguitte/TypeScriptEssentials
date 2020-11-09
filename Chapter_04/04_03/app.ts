interface Todo {
    name: string,
    completed?: boolean
};

interface jQuery {
    (selector: (string | any)): jQueryElement;
    fn: any;
    version: number;
};

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

//Adding new method
$.fn.todo = function(todo?: Todo) : Todo {
    if (todo) {
        $(this).data("todo", todo);
    } else {
        return $(this).data("todo");
    }
}

const todo: Todo = { name: "Wash dishes!" };
const container = $("#container");
container.data("todo", todo);
const savedTodo = container.data("todo");

//Extending the interface
interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

container.todo(todo);