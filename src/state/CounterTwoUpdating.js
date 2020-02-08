import React, { Component } from "react";

class CounterTwoUpdating extends Component {
  state = {
    count: 0
  };

  handleButtonClick = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  render() {
    return (
      <div>
        <p>The current count is: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export default CounterTwoUpdating;

/*========= Updating the Count ====== (#1) */
//Now that the this bug is taken care of
// We can make a new count - which is the current count plus 1 (Line: 9)
//Finally, we set state with the new count (Line: 10-12)
//And now the button does what we want! :)
