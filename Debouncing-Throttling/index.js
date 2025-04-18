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

