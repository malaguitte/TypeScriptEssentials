interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}

//casting
var $ = <jQuery>function(selector) {
    //find DOM element
}
$.version = 1.12;

const element = $("#container");