'use strict';

function display(num) {
    console.log(num);
}

function calculator(num1, num2, callBack) {
    let sum = num1 * num2;

    if(callBack)
        callBack(sum);

    return sum;
}

calculator(1e10, 1e100, (value) => {
    console.log(value);
});