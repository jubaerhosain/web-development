const obj = {
    name: "Jubaer",
    age: 23,
    education: {
        degree: "BSSE",
    },
};

// name aliases to title
const { name: title } = obj;

const {
    education: { degree },
} = obj;

// if board is not defined
// give a default value
const { board: { age } = {} } = obj;

console.log(title);
console.log(degree);
console.log(age);

//=========================
let a = [1, 2, 5, 6, ["age", "weight"]];
const [b, c] = a;
console.log(b, c);

const [, i, , , [, j]] = a;
console.log(i, j);

let m = 1,
    n = 5;
[n, m] = [m, n];
console.log(m, n);

console.log(
    `This is my Name
Hello World`
);
