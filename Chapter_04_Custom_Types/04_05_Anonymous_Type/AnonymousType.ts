//Anonymous type
let todo: { name: string };

//todo = { age: 20 }; // does not work, it expects 'name: string'

function totalLength(x: { length: number }, y: { length: number }): number {
    const total: number = x.length + y.length;
    return total;
}