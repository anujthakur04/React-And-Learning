/************* Fibonacci series without memoization ***************/

let cnt1 = 0;

function fibo1(n) {

    if (n <= 1) return 1;
    cnt1++;
    return fibo1(n - 1) + fibo1(n - 2);
}

console.log(fibo1(10))
console.log("Without memo", cnt1)


/************* Fibonacci series With memoization ***************/


let cnt2 = 0;

function fibo2(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n]
    if (n == 0) return 0
    if (n == 1) return 1;
    cnt2++;
    memo[n] = fibo2(n - 1, memo) + fibo2(n - 2, memo);
    return memo[n];
}
let memo = [0, 1]
console.log(fibo2(8, memo))
console.log("With memo", cnt2)


/************* Memoizing a function that takes object as an argument **************
                                or 
memoized function that takes a function as an argument and returns a memoized version of that function.*/

const memoize = (fn) => {
    const memo = new Map()

    return (obj) => {
        const key = JSON.stringify(obj);
        if (memo.has(key)) return memo.get(key);

        const result = fn(obj);
        memo.set(key, result);
        return result;
    }
}

const add = (obj) => obj.x + obj.y;

const memoizeAdd = memoize(add);

const obj = { x: 5, y: 7 };

console.log("the value :", memoizeAdd(obj))



/************* Memoize function to fetch API using cache to avoid repeated request ***************/


const memoizeFetch = (url) => {
    const memo = {};
    const fetchApi = async (url) => {
        if (memo[url]) return memo[url];

        const response = await fetch(url);
        const data = await response.json();
        memo[url] = data;
        return data;
    }
    return fetchApi(url);
}

const url = 'https://api.example.com/data';
const data = memoizeFetch(url);
console.log(data); // fetched data
