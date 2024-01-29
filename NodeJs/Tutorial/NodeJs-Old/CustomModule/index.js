// // const my_module = require('./custom_module');
// const avg = require('./custom_module');
// // console.log(my_module);

// let a = [1,2,3];
// // console.log(my_module.get_average(a));
// console.log(avg(a));


//access multiple function or attribute
const mod = require('./custom_module');
console.log(mod.average([1,2,3]));
console.log(mod.name);
console.log(mod.repo);
console.log(mod.wow);