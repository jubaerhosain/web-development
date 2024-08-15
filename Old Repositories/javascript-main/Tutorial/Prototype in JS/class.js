class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play() {
        console.log(this.name + " is playing...");
    }
}

const jubaer = new Person("Jubaer", 23);
console.log(jubaer);
jubaer.play();