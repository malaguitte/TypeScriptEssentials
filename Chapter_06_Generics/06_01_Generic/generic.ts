function clone<T>(value: T): T {
    const serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

//It can be done automatically
//clone('hi');
// clone(123);

//Or you can directly set the type
clone<string>("hi");
clone<number>(123);

interface Todo {
    id: number;
    name: string;
    state: number;
};

const todo: Todo = {
    id: 1,
    name: "Wash clothes",
    state: 1
};

//T = todo now
clone(todo);

// T = {name:'something else'} now
clone({name:"something else"});