"use strict"

// never use arrow function in constructor

// constructor function
function Person(name, age) {
    const person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    person.cry = function () {
        console.log(this.name + " is crying");
    }
    return person;
}

Person.prototype = {
    play() {
        console.log(this.name + " is playing");
    },
    eat() {
        console.log(this.name + " is eating");
    }
}

const jubaer = Person("Jubaer", 23);
console.log(jubaer);

//==================================================================================

// constructor function
function PersonNew(name, age) {
    // const this = Object.create(Person.prototype);
    this.name = name;
    this.age = age;
    this.cry = function () {
        console.log(this.name + " is crying");
    }
    // return this;
}

PersonNew.prototype = {
    play() {
        console.log(this.name + " is playing");
    },
    eat() {
        console.log(this.name + " is eating");
    }
}

const hosain = new PersonNew("Hosain", 23);
console.log(hosain);


