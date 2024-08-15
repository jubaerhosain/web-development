// function add(x, y) {
//     console.log(arguments);
// }

// const add = (a, b) => {
//     console.log(arguments);
// }

// add(2, 4);

// function car(name) {
//     this.brand = name;
// }

// const car = (name) => {
//     this.brand = name;
// }

// let data = new car("BMW");
// console.log(data);

let obj = {
    name: "Jubaer",
    fullName: function() {
        let inside = () => {
            console.log(this.name + " Inside Arrow");
        }
        inside();
        console.log(this.name + " Normal Function");
    }, 
    fullName1: () => {
        console.log(this.name + " Arrow Function");
    }
}

obj.fullName();
obj.fullName1();

function num() {
    100;
}

const num1 = () => 100;

const num3 = name => console.log(name);

console.log(num());
console.log(num1());
num3("Jubaer");
