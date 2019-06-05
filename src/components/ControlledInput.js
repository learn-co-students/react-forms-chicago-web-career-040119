import React from 'react';

class ControlledInput extends React.Component {
constructor(props) {
  super(props)
    this.state = {
      value: '',
      //set the value of a component in controlled components
    }
}

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
  event.preventDefault()
  this.sendFormDataSomewhere(this.state)
}

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;















// //a controlled form is a form that derives its input values from state
// import React, {Component} from 'react'
//
// export default class Form extends Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }
//
//   handleLastNameChange = (event) => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }
//
//   handleLastNameChange = (event) => {
//     this.setState({
//       lastName: event.target.value
//       //the event containes data about the target (whatever the event was triggered on)
//       //that target is an input, has a value attribute
//       //this attribute is the value that has been entered into input (not the value from state)
//     })
//   }
// //uncontrolled components, the state is kept in the DOM
//   handleSubmit = event => {
//     event.preventDefault()
//     const firstName = event.target.children[0].value
//     const lastName = event.target.children[1].value
//     this.sendFormDataSomewhere({
//       firstName, lastName
//     })
//   }
//
//   render() {
//     return (
//       <form onSubmit={event => this.handleSubmit(event)}>
//         {/*forms display whatever change we make thanks to the event listener */}
//         <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName}/>
//         <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//       </form>
//     )
//   }
// }
