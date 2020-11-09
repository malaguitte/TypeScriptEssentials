const container = document.getElementById("container");

function Counter(element) {
    this.count = 0;
    element.innerHTML = this.count;

    const updateCount = (element) => {
        this.count++;
        element.innerHTML = this.count;
    }

    element.addEventListener("click", updateCount(element));
}

new Counter(container);

//const filtered = [1,2,3].filter(x => x > 0)