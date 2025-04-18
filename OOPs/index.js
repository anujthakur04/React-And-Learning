/*********************PROTOTYPE ********************** */


// 1. Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// 2. Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has 'null' for its own prototype.



const arr = ['Anuj', 'kashu'];
const obj = {
    name: 'Anuj',
    greet() {
        console.log(`Hi ${this.name}, how are you?`)
    }
}
console.log(obj.toString());
Object.getPrototypeOf(obj) //.greet();

function fun() {

}

/******* Shadowing Properties ******* */

// Shadowing a property on a prototype occurs when an object's instance defines a property with the same name as a property on its prototype. When the object's property is accessed, the instance's property is used, effectively hiding or overriding the property defined on the prototype. 

const myDate = new Date(1995, 11, 17);

// console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
    console.log("something else!");
};

myDate.getTime(); // 'something else!'


/******* Setting a prototype ******* */

// 3 ways to do that : Object.create(), constructor function, ES6 classes

// 1. Using Object.create()
//  The Object.create() method creates a new object (carl) and allows you to specify an object (person ) that will be used as the new object's prototype.

const person = {
    name: 'hello',
    greet() {
        console.log(this.name);
    },
};

const carl = Object.create(person);
carl.greet(); // hello!


// 2. Using Constructor

/* We should never create a function inside of a constructor function. Because every time an instance is created, a new function is created with it which we created inside the constructor function. This will create major issues for performance.

sol:
Person.prototype.preet = function(){
    console.log(this.name)
}
    */

const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

const Person = function (name) {
    this.name = name
    this.preet = function () {

    }
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!



/**************** Own Properties ***************/
// Own properties on a prototype are those directly defined on the prototype object itself, rather than inherited from its prototype chain.

// const irma = new Person("Irma");


// console.log(Object.hasOwn(irma, "name")); // true
// console.log(Object.hasOwn(irma, "greet")); // false

// console.log(Object.hasOwn(irma, "name")); // true
// console.log(Object.hasOwn(irma, "preet")); // true