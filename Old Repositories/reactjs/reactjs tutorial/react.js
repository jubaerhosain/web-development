console.log(React);
console.log(ReactDOM);

// javascript xml
const element = (
    <div id="div1">
        <div id="div2">
            <p> Hello World </p>
        </div>
    </div>
);

// const myElement = React.createElement("div", null, "hello world");
// const myElement1 = React.createElement("div", null, myElement);
// const myElement2 = React.createElement("div", null, JSX);

const domContainer = document.querySelector("#root");
ReactDOM.render(element, domContainer);