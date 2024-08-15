"use strict"

class Student {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }

    call() {
        let a = [1, 2, 3];
        // a.find(function() {
        //     this.print();
        // }, this);

        a.find(() => {
            this.print();
        });
    }
}

const student = new Student("jubaer");
student.call();