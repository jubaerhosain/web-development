"use strict";

async function first(flag) {
    console.log("First Promise");
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(true);
        } else {
            reject("first rejected");
        }
    });
}

async function second(flag) {
    console.log("Second Promise");
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve("all success");
        } else {
            reject("second rejected");
        }
    });
}

function third() {
    console.log("Third Promise");
}

async function start() {
    try {
        const flag = await first(false);    
        const message = await second(flag);
        console.log(message);
    } catch(error) {
        console.log(error);
    }
}

start();

third();