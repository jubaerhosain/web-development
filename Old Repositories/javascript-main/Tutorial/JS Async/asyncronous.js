'use strict';


function printTime() {
    console.log("first");
}

// Asyncronous function
// setInterval(printTime, 1000);
setTimeout(printTime, 10)

console.log("second");