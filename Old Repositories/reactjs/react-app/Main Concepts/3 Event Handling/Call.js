import React from "react";

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: "bn-BD",
        };
        this.clickHandle = this.clickHandle.bind(this);
    }

    // property of React.Component Class
    /*
    state = {
        date: new Date(),
        locale: "bn-BD",
    };
    */

    // method of Call class
    updateTime() {
        this.setState({ date: new Date() });

        /*
        this.setState((state, props) => {
            // state is previous state
            this.setState({ date: new Date() });
        });
        */
    }

    // runs after components has been rendered to the real DOM
    componentDidMount() {
        this.clockTimer = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    /*
    // arrow function
    clickHandle = (event) => {
        // event.preventDefault();
        // console.log(new Date().toLocaleTimeString());
        this.setState({ locale: "en-US" });
        console.log(this);
    }
    */

    // normal function
    clickHandle(locale, event) {
        // event.preventDefault();
        // console.log(new Date().toLocaleTimeString());
        console.log(event);
        this.setState({ locale });
        console.log(this);
    }

    render() {
        // never assign/change any props here
        return (
            // give a "single" head or top element
            <div>
                <h1 className="heading">
                    <p>{this.props.children}</p>
                    <span>Time: {this.state.date.toLocaleTimeString(this.state.locale)}</span>
                </h1>

                {/* Do not call like clickHandle() 
                    this.clickHandle is a callback function, react will call after clicking*/}
                {/*
                <button type="button" onClick={this.clickHandle}>
                    Click Here
                </button>
                */}

                {/*
                <button type="button" onClick={this.clickHandle.bind(this)}>
                    Click Here
                </button>
                */}

                {/* bind in constructor */}
                {/*
                <button type="button" onClick={this.clickHandle}>
                    Click Here
                </button>
                */}

                {/* passing parameter */}
                {/* 
                <button type="button" onClick={this.clickHandle.bind(this, "en-US")}>
                    Click Here
                </button>
                */}

                {/* using arrow function here (without binding)
                event would be found like this*/}
                <button type="button" onClick={(event) => this.clickHandle("en-US", event)}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Call;
