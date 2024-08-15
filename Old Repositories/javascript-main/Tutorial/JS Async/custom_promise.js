"use strict";

function first(flag) {
    console.log("First Promise");
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(true);
        } else {
            reject("first rejected");
        }
    });
}

function second(flag) {
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

first(true)
    .then(second)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (vlaue) {
        console.log(vlaue);
    });

third();