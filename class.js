class Personanother {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('person is eating');
    }
    sleep() {
        console.log('person is sleeping');
    }
    play() {
        console.log('person is playing');
    }
}

console.log('this is from class ')
console.dir(Personanother);
//parent class
class Parentclass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
//child clasls
class CricketerwithPerson extends Parentclass {
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

let shakib1 = new CricketerwithPerson('shakib', 35, "allrounder", 'Bangladesh');
shakib1.play();
shakib1.eat();

//getter and setter
class AnotherPerson {
    constructor(name, age) {
        this.name = name; //properties
        this.age = age;
    }
    play() {//this is called method 
        console.log(`${this.name} is playing`);
    }
    get setname() {//getter
        return this.name;
    }
    set setName(name) {
        //setter 
        this.name = name;
    }
}
let tamim = new AnotherPerson('tamim', 37);
tamim.setName = "sakib";

console.log(tamim.setname);