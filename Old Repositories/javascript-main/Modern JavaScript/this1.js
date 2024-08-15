"use strict"

const button = document.getElementById("button");

const print = () => {
    // this of window
    console.log(this);
}

const print1 = function() {
    // this of button
    console.log(this);
    setTimeout(() => {
        // this of button
        console.log(this);
    }, 200);
}

button.addEventListener("click", print1);