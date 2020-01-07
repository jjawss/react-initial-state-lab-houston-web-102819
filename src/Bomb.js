// your Bomb code here!
import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
    // if (this.state.secondsLeft > 0) {
    //   return `${this.state.secondsLeft} seconds before I go boom`;
    // } else {
    //   return "-0 seconds left before I go boom!";
  }

  render() {
    if (this.state.secondsLeft > 0) {
      return (
        // setState = this.state.secondsLeft
        <div>{`${this.state.secondsLeft} seconds le before I go boom!`}</div>
      );
    } else {
      return <div>Boom!</div>;
    }
  }
}

export default Bomb;
