import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "JavaScript",
            text: "JavaScript is awesome",
            library: "Angular",
            awesome: true,
        };
    }

    changeTitle = (event) => {
        this.setState({ title: event.target.value });
    };

    changeText = (event) => {
        this.setState({ text: event.target.value });
    };

    changeLibrary = (event) => {
        this.setState({ library: event.target.value });
    };

    changeCheck = (event) => {
        this.setState({ awesome: event.target.checked });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, text, library, awesome } = { ...this.state };
        console.log(title, text, library, awesome);
    };

    // file handling state less so file input uncontrolled way te korte hobe
    // browser er default behavior use kore
    // othoba "ref" use kore

    render() {
        console.log("Form rendered");
        const { title, text, library, awesome } = { ...this.state };
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter title" value={title} onChange={this.changeTitle} />
                    <p>{title}</p>
                    <textarea name="textarea" value={text} onChange={this.changeText} />
                    <br />
                    <select value={library} onChange={this.changeLibrary}>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Next">Next</option>
                        <option value="React Native">React Native</option>
                    </select>
                    <input type="checkbox" checked={awesome} onChange={this.changeCheck} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
