"use strict";

async function p1() {
    console.log("p1");
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve({
                name: "Md. Jubaer Hosain",
                age: 23,
            });
        }
    });
}

async function p2(data) {
    console.log("p2");
    return new Promise(function (resolve, reject) {
        if (true) {
            console.log(data);
            resolve();
        }
    });
}

async function p3() {
    console.log("p3");
    return new Promise(function (resolve, reject) {
        if (false) {
            resolve("success");
        } else {
            reject("p3 rejected");
        }
    });
}

async function start() {
    try {
        // data is parameter message given by resolve
        const data = await p1();
        await p2(data);
        const message = await p3();
        console.log(data);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

start();

function test() {
    console.trace();
}

test();
