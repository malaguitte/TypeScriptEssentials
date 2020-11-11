export enum TodoState {
    New = 1,
    Active = 2,
    Completed = 3,
    Deleted = 4
};

export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}