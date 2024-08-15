"use strict"

function first(callBack, flag) {
    console.log("First");
    if(flag) {
        callBack(false);
    } else {
        console.log("Rejected in first");
    }
}

function second(callBack, flag) {
    console.log("Second");
    if(flag) {
        callBack(true);
    } else {
        console.log("Rejected in second");
    }
}

function third(flag) {
    console.log(flag);
}


first(function(value) {
    second(third, value)
}, true);


