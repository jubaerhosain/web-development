"use strict";

async function func() {
    return new Promise(function (resolve) {
        const time = new Date().getSeconds();
        while (time + 2 >= new Date().getSeconds());
        let obj = {
            name: "Jubaer",
            age: 23,
            address: "Dhaka",
        };
        resolve(obj);
    });
}

// console.log("wow1");
// func()
//     .then((val) => console.log(val))
//     .catch();
// console.log("wow2");

console.log("wow1");
async function call() {
    try {
        const message = await func();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
call();
console.log("wow2");
