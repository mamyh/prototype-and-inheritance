const { isThisTypeNode } = require("typescript");

Personwithnew.prototype = {
    eat() {
        console.log('person is eating');
    },
    sleep() {
        console.log('person is sleeping');
    },
    play() {
        console.log('person is playing');
    }
}
//this function is called constructor function 
// function Person(name,age){
//     let person=Object.create(Person.prototype);
//     person.name =name;
//     person.age = age;
//     return person;
// }
//with the new keyword
function Personwithnew(name, age) {
    // let this = Object.create(Personwithnew.prototype);
    this.name = name;
    this.age = age;
    //return this;
}

//let shakib = Person('shakib', 35);

console.log('this is from vanilla');
console.dir(Personwithnew);

let arr = new Array();
console.log('after array');
console.dir(arr);

let f = function just() { };
console.log('observation of function and object and prototype');
console.dir(f);
//Parent class
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    eat: function () {
        console.log('person is eating');
    }
}
//Sub class 
function Cricketer(name, age, type, country) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function () {
    console.log(`${this.name}  is playing`);
}

console.dir(Cricketer);