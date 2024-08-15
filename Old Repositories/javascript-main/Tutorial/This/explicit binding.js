const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
// }

const person2 = {
    firstName: "John",
}

// Return "John Doe":
console.log(person1.fullName.call(person2));