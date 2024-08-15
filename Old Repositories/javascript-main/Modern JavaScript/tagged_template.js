const p1 = "Jubaer";
const p2 = "Hosain";

function modifier(strings, ...values) {
    console.log(strings, values);
    return strings.reduce((prev, curr) => {
        return prev + curr + (values.length ? "Mr. " + values.shift() : "");
    }, "");
}

const t = modifier`This is ${p1} and this is ${p2}.`;
console.log(t);
