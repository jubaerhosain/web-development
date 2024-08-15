// Set(Iterable)

const set = new Set([1, 2, 3, 6, 4, 5, 4]);
console.log(set.values());

const set1 = new Set("name");
console.log(set1.values());

// =================
const weakSet = new WeakSet();

class A {
    constructor() {
        weakSet.add(this);
    }

    print() {
        if (!weakSet.has(this)) {
            console.log("You cannot access using prototype");
            return;
        }
        console.log("Hello world");
    }
}

A.prototype.print();
