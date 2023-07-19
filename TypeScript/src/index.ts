console.log("Hello World!");

const fn = () => console.log("Hello World!");

class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

const student: Student = new Student("Md. Jubaer Hosain", 23);
console.log(student.getName());

// hello
const a: number[] = new Array(4);
