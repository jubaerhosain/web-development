const methods = {
    play() {
        console.log(this.name + " is playing");
    },
    eat() {
        console.log(this.name + " is eating");
    }
}

const Person = (name, age) => {
    const person = Object.create(methods);
    person.name = name;
    person.age = age;
    person.cry = function () {
        console.log(this.name + " is crying");
    }
    return person;
}

const jubaer = Person("Jubaer", 23);
console.log(jubaer);
jubaer.eat();
jubaer.cry();