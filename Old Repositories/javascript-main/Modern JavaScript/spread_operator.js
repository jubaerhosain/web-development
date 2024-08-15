const a = [1, 3, 4];
const b = [...a, 5, 5];

// copy of a [not reference]
const c = [...a];

console.log(a);
console.log(b);
console.log(c);

// object spreading
const obj1 = {
    x: 2,
    y: 5,
};

const obj2 = { ...obj1 };
console.log(obj2);