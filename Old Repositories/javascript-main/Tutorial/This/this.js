/**
 * implicit binding
 * explicit binding
 * new binding
 * window binding
 */

// implicit binding=====================================================
/** 
const obj = {
    name: "Jubaer",
    print: function () {
        console.log(this.name);
    },
};

obj.print();

const Person = function (name) {
    return {
        name: name,
        print: function () {
            console.log(this.name);
        },
        father: {
            name: "Mr. A",
            print: function () {
                console.log(this.name);
            },
        },
    };
};

const a = Person("abc");
a.print();
a.father.print();
*/

// explicit binding===================================================
/*
const printName = function (gender, address) {
    console.log(this.name, gender, address);
};

const user = {
    name: "Md. Jubaer Hosain",
    age: 23,
};

const gender = "Male";
const address = "N/A";

const arr = [gender, address];

printName.call(user, gender, address);
printName.apply(user, arr);

const callFun = printName.bind(user, gender, address);
callFun();
*/

// new binding=============================================================
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        console.log(name, age);
    }
}

const p = new Person("Jubaer", 23);
console.log(p);
p.print();
*/


// window binding============================================================
// ager tintar konota na hole js window er sathe this k bind kore dey
"use strict"

const printA = function() {
    console.log(window === this);
    // console.log(this.name);
}

printA();