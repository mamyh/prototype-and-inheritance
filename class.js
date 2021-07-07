class Person {
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
console.dir(Person);