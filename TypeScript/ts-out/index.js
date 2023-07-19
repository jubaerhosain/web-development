"use strict";
console.log("Hello World!");
const fn = () => console.log("Hello World!");
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
const student = new Student("Md. Jubaer Hosain", 23);
console.log(student.getName());
// hello
const a = new Array(4);
