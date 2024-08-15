function func(func1) {
    return func1();
}

console.log(func(function() {
    return "GFG";
}));
