import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleButtonClick() {
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        {/*<button onClick={function() {console.log('clicked')}}>Add 1</button>*/}
        {/*<button onClick={this.handleButtonClick}>*/}
        <button onClick={() => this.handleButtonClick()}>Add 1</button>
      </div>
    );
  }
}
export default Counter;

/* ========== Events ========== (#1) */
//Objective:
//Events and state go hand in hand - very common to update state in response to a user action
// Making a component called Counter that displays a count - when you click a button it add 1 to the count

/* ========= Events =========== (#2) */
//Initialized state (Lines: 4-6)
//Note: we've used a new way to initialize state here. It works exactly the same way but without the need for writing a constructor
//Imported into App.js to get it rendered
//Problem:
//With this rendered on the wepage = clicking the button does nothing
// How do we wire up some code to be triggered when the button is clicked? (e.g, how do we wire up an event listener)
//Solution:
// Add a prop to the button JSX itself
// We can add a prop called onClick and set the value to the event handler function (Line:16)
//With the listener plugged in = clicking the button in browser should log 'clicked' to the console
// But writing a full event handler within JSX is going to be cluttered
//So we'll move that event handler into a method on the class called handleButtonClick (Lines: 8-10)

/* ========= Event ========== (#3) */
//We can try to work with state inside this event handler method (Line: 8-10)
//We'll need to read the existing count in state -  so we can addd 1 to it
// Error:
//If we try to add this we'll an error 'TypeError: Cannot read propery 'state' of undefined' (Line: 9)
//Solution:
// There are three ways to fix this

/*Solution one: constructor bind */
//1st approach = is to bind the handlebuttonClick method in the class construtor
/*
constructor(props) {
  super(props)
  this.state = {
    count: 0
  }
  this.handleButtonClick = this.handleButtonClick.bind(this)
} */

/*Solution two: arrow function in JSX */
//2nd approach (much cleaner)  = we can use an arrow gunction in the JSX (Removed Line: 17 & Added Line: 18)
//Using this approach also fixes the console.log event handler & is a bit cleaner than the .bind(this) approach

/*Solution 3: arrow functtion class method*/
//We'd put the JSX back to the way it was - without an arrow function (Line: 17)
//We'd then change the event handler to an arrow function instead
/*
handleButtonClick = () => {
  console.log(this.state.count)
}
*/
//Note:
// Checking in the console when clicking the button = it works
// This is the cleanest approach by far - and has other benefits
//Takeway:
// When adding an event listenr function to a React class - use an arrow function
//...to make sure that this is reffering to the class instance
//Now the this bug is taken care of from the original TypeError we we're getting

//Counter.js ===> CounterTwoUpdating.js (updating the count etc.)
