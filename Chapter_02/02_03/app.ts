const container = document.getElementById("container");

const todo = {
    id: 123,
    name: "Wash clothes",
    completed: true
};

const displayName = `Todo #${todo.id}`;


container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${todo.completed ? "" : "hidden"}" text-success glyphicon glyphicon-ok"></i>
    <span class="name">${displayName}</span>
</div>`;