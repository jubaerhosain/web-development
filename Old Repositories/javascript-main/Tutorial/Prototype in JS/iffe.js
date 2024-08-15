const fun1 = (() => {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    }
})();

const fun2 = () => {
    let counter = 0;
    let name = "Jubaer Hosain";
};

console.log(fun2.counter);


console.log(fun1());
console.log(fun1());
