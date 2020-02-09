import React, { Component } from "react";

class CounterThree extends Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = {
      count: 0
    };
  }

  handleButtonClick = () => {
    console.log("props in handleButtonClick", this.props);
    console.log("state in handleButtonClick", this.state);
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <p>The current count is: {this.state.count}</p>
        <button>Add 1</button>
      </div>
    );
  }
}

export default CounterThree;

/*========= Using state and props together ====== (#1) */
//We can read props and state at the same time
//They can even have the same name
// Adding a prop called count to where we render the CounterThree (App.js)
//The prop won't add any functionality
// Purpose = is for us to demonstrate that props and state can live together
