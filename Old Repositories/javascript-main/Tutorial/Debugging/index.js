class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const obj = {
    name: "Jubaer",
    age: 26,
    location: "Dhaka",
};

let x = 0;
for (let i = 0; i < 5; i++) {
    x += i;
}

const student = new Student("Jubaer", 3553);

console.log(obj);
