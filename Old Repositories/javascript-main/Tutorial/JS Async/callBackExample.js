"use strict";

const paymentStatus = true;
const marks = 80;

function enroll(callBack) {
    console.log("Enrollment is in porgress.....");
    setTimeout(function () {
        if (paymentStatus) {
            callBack();
        } else {
            console.log("Payment failed!");
        }
    }, 2000);
}

function progress(callBack) {
    console.log("Course on progress.....");
    setTimeout(function () {
        if(marks >= 80) {
            callBack();
        } else {
            console.log("Couldn't get enough marks to get the certificate.");
        }
    }, 3000);
} 

function getCertificate() {
    console.log("Preparig your certificate.....");
    setTimeout(function () {
        console.log("Congratulations! You got the certificate.")
    }, 1000);
}

// not able to the solve problem
// not able to give parameter inside progress function
// enroll(progress);
// progress(getCertificate);

// solved with the help of anonymous function
enroll(function () {
    progress(getCertificate)
});

// do the same this using promise

function hello() {
    console.log("hello");
}

// works
hello(23);