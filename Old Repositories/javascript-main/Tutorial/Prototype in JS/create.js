const parent = {
    name: "Md. Jubaer Hosain",
    age: 23,
};

const child = Object.create(parent);

console.log(child);
console.log(child.name);