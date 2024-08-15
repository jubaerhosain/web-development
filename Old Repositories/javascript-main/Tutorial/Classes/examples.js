'use strict';

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    get getBrand() {
        return this.brand;
    }

    present() {
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    } 

    show() {
        return `${this.present()}, it is a ${this.model}`;
    }
}

const car = new Car("BMW");
const car1 = new Model("Tesla", "Master");
console.log(car);
console.log(car1);
console.log(car.getBrand);


// static

class Student {
    constructor(name) {
        this.name = name;
    }

    static hello() {
        console.log("Hello");
    }
} 

const student = new Student("Jubaer");
console.log(arguments);
Student.hello();