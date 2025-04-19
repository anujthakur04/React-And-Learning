// Debouncing 

let count = 1;
const getData = () => {
    console.log("fetch something...", count++);
}

const debouncing = function (fn, d) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(this, args)
        }, d)
    }
}

const newFunction = debouncing(getData, 500);



// Throttling

function updateLayout() {
    console.log("Movement")
}

const throttling = (fn, d) => {
    let isRunning = false;
    return function (...args) {

        if (!isRunning) {

            isRunning = true;
            fn.apply(this, args)

            setTimeout(() => {
                isRunning = false;
            }, d)
        }
    }
}

const throttlingUpdate = throttling(updateLayout, 100);

window.addEventListener("resize", () => {
    throttlingUpdate();
})

