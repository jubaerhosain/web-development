'use strict';

const paymentStatus = false;
const marks = 60;

async function enroll() {
    console.log("Enrollment is in porgress.....");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentStatus) {
                resolve();
            } else {
                reject("Payment failed!");
            }
        }, 2000);
    });

    return promise;
}

async function progress() {
    console.log("Course on progress.....");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject("Couldn't get enough marks to get the certificate.");
            }
        }, 3000);
    });

    return promise;
}

async function getCertificate() {
    console.log("Preparig your certificate.....");
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congratulations! You got the certificate.");
        }, 1000);
    });

    return promise;
}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (value) {
//         console.log(value);
//     });


async function start() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}



start();