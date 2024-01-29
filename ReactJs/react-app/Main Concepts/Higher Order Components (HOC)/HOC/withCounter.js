import React from "react";

function withCounter(OriginalComponent) {
    class newComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }
    
        incrementCounter = () => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            });
        };

        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} incrementCounter={this.incrementCounter}/>
        }
    }
    return newComponent;
}

export default withCounter;