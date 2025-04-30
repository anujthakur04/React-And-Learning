
// Iterators

function Iterator() {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: false
                };
            }
            else {
                return {
                    value: undefined,
                    done: true
                };
            }
        },
    };
}

const array = [1, 2, 3, 4, 5];
const arrayVal = Iterator(array);

console.log(arrayVal.next());
console.log(arrayVal.next());
console.log(arrayVal.next());
console.log(arrayVal.next());
console.log(arrayVal.next());
console.log(arrayVal.next());


// Generators


function* Generators() {
    yield 1;
    yield 2;
    yield 3;
}

const Generator = Generators();
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());

