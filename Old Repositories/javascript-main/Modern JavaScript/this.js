const javascript = {
    name: "Jubaer",
    nums: [1, 2, 3, 4],
    print: function () {
        this.nums.forEach(function(a) {
            // this = global object
            // this of forEach function [call back is not arrow function]
            console.log(this);
            console.log(a);
        });
    }
}

// javascript.print();


const cpp = {
    name: "Jubaer",
    nums: [1, 2, 3, 4],
    print: function () {
        this.nums.forEach((a) => {
            // this = cpp
            // arrow function has no this
            console.log(this);
            console.log(a);
        });
    }
}

cpp.print();