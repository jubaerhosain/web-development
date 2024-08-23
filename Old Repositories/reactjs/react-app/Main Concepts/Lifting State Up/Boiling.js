export default function Boiling({ celsius = 0 }) {
    console.log("Boiling rendered");
    if (celsius >= 100) {
        return <p>Water will boil.</p>;
    }
    return <p>Water will not boil.</p>;
}
