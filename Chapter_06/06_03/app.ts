function totalLengthOld(x: {length: number}, y: {length: number}): number {
    const total: number = x.length + y.length;
    return total;
}

//This would allow the user to give two different types
//below I am adding the length of an array + length of a string
totalLengthOld([1,2,3], "hello");

interface ObjectWithLengthProperty {
    length: number;
}

//Now both x and y need to be from the same type
function totalLength<T extends ObjectWithLengthProperty>(x: T, y: T): number {
    const total: number = x.length + y.length;
    return total;
}

//totalLength([1,2,3], "hello"); //will not work
totalLength([1,2,3], [1,2]); //works

class CustomArray<T> extends Array<T> {}

//this works because CustomArray still matches the type of Array 
totalLength([1,2,3], new CustomArray<number>(1,2,3)); //works
//totalLength([1,2,3], <CustomArray<number>>[1,2]); //works

