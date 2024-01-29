// // const { resourceUsage } = require("process");

const { pid } = require("process");

// console.log('This is Custom Module.');

// function get_average(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// // this function can be accessed by outside 
// // giving permission 
// module.exports = get_average;


// export multiple function or attributes
// make an export object, for multiple
console.log('This is Custom Module.');

function get_average(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

// this function can be accessed by outside 
// giving permission 
// module.exports = {
//     average: get_average,
//     name: 'Jubaer',
//     repo: 'Github'
// };

// This is also valid syntaxt 
module.exports.average = get_average;
module.exports.name = 'Jubaer';
module.exports.repo = 'Github';
module.exports.wow = 'Wowwwwww...';
