
//  OBJECT ORIENTED PROGRAMMING

/* Object-Oriented Programming (OOP) is essentially a programming paradigm that organises code into reusable, self-contained objects. It focuses on the concept of objects, which represent real-world entities with their own attributes (data) and behaviours (methods).
OOP in JavaScript is bit different. We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).


There are 4 main principles in OOP, and they are:

Abstraction : Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

Encapsulation : Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside     that class

Inheritance : Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.

Polymorphism : Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.  */









/* 3 imp things to remember about classes

Classes are not hoisted 

Classes are first - class citizens (If a programming language has the ability to pass a function as an argument – to treat functions as values and to return functions – it is said that the language has first - class functions and those function are called first - class citizens)

Classes are executed in strict mode. */





/* INHERITANCE IN JAVASCRIPT 

1. CONSTRUCTOR FUNCTION 

        const User = function (name, password) {

            this.name = name
            this.password = password
        }

        User.prototype.printName = function () {
            console.log(this.name);
        }

        const Admin = function (name, password, course) {
            User.call(this, name, password)
            this.course = course
        }

        Admin.prototype = Object.create(User.prototype)

        Admin.prototype.Stats = function () {
            console.log("Stats");
        }

        const kedar = new Admin("kedar", 12345, "JavaScript")
        kedar.printName()


2. ES6 classes

        class User{
            constructor(name, password){
                this.name = name
                this.password  =password
            }

            printName(){
                console.log(this.name);
            }
        }

        class Admin extends User{
            constructor(name, password, course){
                super(name, password)
                this.course = course
            }

            Stats(){
                console.log("Stats");
            }
        }

        const kedar = new Admin("kedar", 123456, "JavaScript")
        kedar.printName()

3. Object.create() 

        const User = {
            printName(){
                console.log(this.name);
            },

            init(name, password){
                this.name = name
                this.password = password
            }
        }

        const Admin = Object.create(User)
        Admin.init = function(name, password, course){
            User.init.call(this, name, password)
            this.course = course
        }

        Admin.stats = function(){
            console.log("Stats");
        }

        const kedar = Object.create(Admin)
        kedar.init("kedar", 123456)
        kedar.printName()
        kedar.stats()
*/


