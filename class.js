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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
//child clasls
class Cricketer {
    constructor(name, age, type, country) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}