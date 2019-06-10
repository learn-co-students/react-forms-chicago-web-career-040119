import React, { Component } from "react";

export default class Keypad extends Component {

  onKeyUpHandler = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.onKeyUpHandler} />
    )
  }
}
