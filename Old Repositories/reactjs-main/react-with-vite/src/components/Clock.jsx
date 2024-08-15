import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(props.locale),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(this.props.locale),
    });
  }

  render() {
    return (
      <div>
        <h2>Current Time ({this.props.locale}):</h2>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
