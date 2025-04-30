// const URL = "https://api.thecatapi.com/v1/breeds";

// const main = document.getElementById('main');
// main.innerHTML = "<p>Loading..."

// fetch(URL)
//     .then((response) => response.json())
//     .then((breeds) => main.innerHTML = listOfNames(breeds));

// function listOfNames(breeds) {
//     const names = breeds
//         .map(breed => `<li> ${breed.name} </li>`)
//         .join("\n");
//     return `<ul> ${names} </ul>`
// }

// fetch(URL)
//     .then((response) => response.json())
//     .then(breeds => {
//         const names = breeds.map(breed => breed.description).join("<br>")
//         main.innerHTML = names;
//     })
//

/////////////////////// CALLBACK EXAMPLE///////////

// const isPhoneStore = true;
// const isPhoneAvailable = true;

// function processMessage(resolveCallback, rejectCallback) {
//     if (!isPhoneStore) {
//         rejectCallback({
//             name: 'Wrong store',
//             message: 'Sorry, this is a food store!',
//         });
//     } else if (!isPhoneAvailable) {
//         rejectCallback({
//             name: 'Out of stock',
//             message: 'Sorry, the X phone is out of stock!',
//         });
//     } else {
//         resolveCallback({
//             name: 'OK',
//             message: 'The X phone is available! How many you want to buy?',
//         });
//     }
// }

// processMessage(
//     value => console.log(value),
//     reason => console.log(reason)
// );


/////////////// PROMISES EXAMPLE  ///////////////////////////

// const isPhoneAvailable = true;
// const isPhoneStore = true;

// function process() {
//     return new Promise((resolve, reject) => {
//         if (!isPhoneAvailable) {
//             reject({ message: 'No, phone is not available.' })
//         }
//         else if (!isPhoneStore) {
//             reject({ message: 'Not a phone store.' })
//         }
//         else {
//             resolve({ message: 'Yes, phone is available.' })
//         }
//     })
// };

// process()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));



// const main = document.getElementById('main');
// (async function () {
//     try {
//         const response = await fetch('https://api.thecatapi.com/v1/breeds')
//         const json = await response.json();
//         const names = await json.map((breed) => breed.name).join('<br>');
//         main.innerHTML = names;
//     }
//     catch (error) {
//         console.log(error)
//     }
// })();


////////////////// Promise methods ////////////////////

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 resolve"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2  resolve"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 resolve"), 2000);
// })

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(error => {
//         // return Promise.reject(error)
//         console.error(error)
//     })
//     .then(res => {
//         console.log("phase 2")
//     })
//     .catch(error => {
//         console.error(error)
//     })



// function cancelablePromise(promise) {
//     let isCancelled = false;
//     const wrapperPromise = new Promise((resolve, reject) => {
//         promise.then((result) => {
//             if (!isCancelled) {
//                 resolve(result);
//             }
//         }).catch((error) => {
//             if (!isCancelled) {
//                 reject(error);
//             }
//         });
//     });
//     return {
//         promise: wrapperPromise,
//         cancel() {
//             isCancelled = true;
//         },
//     };
// }


//////////////// Closures /////////////////
// function z() {
//     let b = 10;
//     return function x() {
//         let a = 4;
//         return function y() {
//             console.log(a, b)
//         }
//         a = 5;
//         // y();
//     }
//     b = 11;
//     // x();
// }

// const t = z();
// console.log(t)



//////////// Currying with bind() ///////////

// let multiply = function (b, c) {
//     console.log(this.value * b + c)
// }

// let context = {
//     value: 2
// }

// let multiplyByTwo = multiply.bind(context, 3)
// multiplyByTwo(5);


///////////////// Currying with closures ///////////////////

// function maths(a) {
//     return function sum(b) {
//         console.log(a + b);
//     };
// }

// const partial = maths(5);
// const result = partial(2);

// const add = (a) => {
//     return (b) => {
//         return a + b;
//     };
// }
// const p = add(10);
// console.log(p(3));



/// Famous closures problems !! ////////////////

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function y(i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, i * 1000);
//         }
//         y(i);
//     }
//     console.log("Hello Everyone")
// }
// x();

////// closures counter examples ////////////////////

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
createCounter();
createCounter();

