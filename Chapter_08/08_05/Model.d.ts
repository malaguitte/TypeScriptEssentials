export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
export declare enum TodoState {
    Active = 1,
    Completed = 2
}
