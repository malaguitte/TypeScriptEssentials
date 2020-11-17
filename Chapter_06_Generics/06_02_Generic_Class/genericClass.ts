const myArray1: number[] = [1,2,3];
const myArray2: Array<number> = [1,2,3];

class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue) {
    }
}

//Dynamic types
const pair1 = new KeyValuePair(1, "hello");
const pair2 = new KeyValuePair(2, false);
const pair3 = new KeyValuePair("3", new Date());
const pair4 = new KeyValuePair("4", 123);
//const pair5 = new KeyValuePair<string, number>("hello", "hi"); // does not work.
const pair6 = new KeyValuePair<string, number>("hello", 2); // works
const pair7 = new KeyValuePair(7, "hi");


class KeyValuePairPrinter<T, U> {
    constructor(private pairs: KeyValuePair<T, U>[]) {
    }
    //could be written as:
    // constructor(private pairs: Array<KeyValuePair<T, U>>) {
    // }

    print(): void {
        this.pairs.forEach(pair => {
            console.log(`Key: ${pair.key}, Value: ${pair.value}`);
        });
    }
}
//it works because both pairs share the same "Type"
const printer = new KeyValuePairPrinter([pair1, pair7]);
printer.print();

//It won't work because the pairs are from different "Types"
//const printer2 = new KeyValuePairPrinter([pair3, pair4]);