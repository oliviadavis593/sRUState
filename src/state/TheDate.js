import React, { Component } from "react";

class TheDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: new Date()
    };
    //console.log("constructor");
  }

  /*componentDidMount() {
    setInterval(() => {
     console.log('tick')
    }, 1000)
  }}*/

  /*componentDidMount() {
    this.interval = setInterval(() => {
      this.state.datetime = new Date()
    }, 1000)
  }*/

  componentDidMount() {
    //console.log("componentDidMount");
    this.interval = setInterval(() => {
      //console.log("setInterval");
      this.setState({
        datetime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    //console.log("render");
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;

/*Setting & Reading state: (#1) */
//Created component to be self contained = responsible for its own date-time
//To create date-time when TheDate comp instances are created = use method in React classes (constructor())
//Error:
//ReferenceError: 'this hasn't been initialised - super() hasn't been called
//Fix:
// This is because constructor is used by React internals when components are created
// Contstructors are a life-cycle method - and called when an instance of a class is created
// Props are supplied to the constructor as an argument
// Solutio: Add props to constructor as an argument & super(props)

/*Setting & Reading State: (#2) */
// With new constructor in place - we can add state to this component (Line: 6-8)

//Note:
// Once you add key(s) and value(s) to the state object - you can access the state within the render function
// In Otherwords, you can go inside the return and call a key from the object (ex: {this.state.key})
//Looking into ReactDevTools = you can change the state (props cannot do this)

/*Setting & Reading State (#3) */
//To finish requirements of showing the date-time we updated constructor and render to initialize & display the date (Lines: 13 & 7)
//To summarize: we've set an inital state in constructor method & read that state within the render

/*Updating State (#1) */
//Objective:
//Making the date update every second with the new time (like a clock)
//To acieve this = using life-cycle methods

/*Updating State (#2) */
//To update state every second - we can use setInterval with 2nd argument for miliseconds set to 1000 (1 sec)
//This would call a callback function (1st argument) every second
//We'd put the setInterval call inside componentDidMount() - because it's directly after the component is mounted - and it only runs after the first render (ideal)
//(Lines: 11-15)

//Note:
// using componentWillUnmount = would be too late - we want to update the date-time whilte component is mounted and visible
// using render = if & each time the props change - it would create a new interval (bad)
//using constructor = could happend when component hasn't been mounted (a waste)

/*Updating State (#3) */
//It's best practice to clean up if a component get unmounted
// with setInterval we'll us a clearInterval()
//We'll need to save the interval when we create it so that we can unmount it later (put in this.interval)
// componentWillUnmount cleans up the interval when the component is removed from the DOM (Lines: 17-19)

/*Updating Sate (#4) */
//Now we can replace the console.log('tick')  with the code that will update state (Lines: 17-21)
//Problem:
// date and time aren't changing & nothings updating
// We can't update state this way - React needs to be notified about the update
// If we directly mutate the component state - React won't know about the change
// Solution:
// Use a method called setState
// setState takes an object argument that the component will then merge with the existing state
// Use setState with an object containing the new datetime key & value (Lines: 23-29)

/* Updating State (#5: Overview) */
// Everytime setState is called - React component will re-trigger render
// You can add console.log calls into constructor, render, componentDidMount, & setInterval callback to see life-cycle in action (Lines: 9, 25, 27, 39)
