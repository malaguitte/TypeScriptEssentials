function totalLength(x: (any[] | string), y: (any[] | string)): number {
    var total: number = x.length + y.length;

    if (x instanceof Array) {
        x.push(4);
    }

    if (y instanceof String) {
        y.substr(0);
    }

    return total;
}

totalLength([1,2,3], "hello");