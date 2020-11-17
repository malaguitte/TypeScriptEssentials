// Importing Todo from model
import { Todo, TodoState } from "./model";
import { TodoService } from "./DataAccess";

const service = new TodoService([]);

const todo: Todo = {
    id: 1,
    name: "Wash dishes!",
    state: TodoState.New
};

service.add(todo);

const currentTodoList: Todo[] = service.getAll();

currentTodoList.forEach(todo => {
    console.log(`${todo.id} - Name: ${todo.name} [${TodoState[todo.state]}]`);
});