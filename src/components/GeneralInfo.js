import React, {Component} from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: [],
      generalInfoInput: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      editMode: true,
    }
  }
  
  handleNameChange = (e) => {
    const prevState = this.state.generalInfoInput;
    this.setState({
      generalInfoInput: {
        name: e.target.value,
        email: prevState.email,
        phoneNumber: prevState.phoneNumber,
      }
    });
  }

  handleEmailChange = (e) => {
    const prevState = this.state.generalInfoInput;
    this.setState({
      generalInfoInput: {
        name: prevState.name,
        email: e.target.value,
        phoneNumber: prevState.phoneNumber,
      }
    });
  }

  handlePhoneChange = (e) => {
    const prevState = this.state.generalInfoInput;
    this.setState({
      generalInfoInput: {
        name: prevState.name,
        email: prevState.email,
        phoneNumber: e.target.value,
      }
    });
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      generalInfo: this.state.generalInfo.concat(this.state.generalInfoInput),
      generalInfoInput: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      editMode: false,
    })
  }

  switchMode = (e) => {
    const prevState = this.state.editMode;
    e.preventDefault();
    this.setState({
      editMode: !prevState,
    })
  }

  shiftSection = (e) => {
    const prevState = this.state.generalInfo;
    prevState.shift();
    e.preventDefault();
    this.setState({
      generalInfo: prevState,
    })
  }

  render() {
    if (!this.state.editMode) {
      return ( 
        <div>
          <button onClick={this.switchMode}>Add Info</button>
          <button onClick={this.shiftSection}>Remove Oldest Section</button>
          {this.state.generalInfo.map((section) => {
            return (
              <div key={uniqid()}>
                <h4 key={uniqid()}>{section.name}</h4>
                <h4 key={uniqid()}>{section.email}</h4>
                <h4 key={uniqid()}>{section.phoneNumber}</h4>
              </div>
            );
          })}
        </div>
      );
    }

    return ( 
      <div>
        <h1>
          General Info
        </h1>
        <form onSubmit={this.onSubmitInfo}>
          <label htmlFor="nameInput">Enter name </label>
          <input
            onChange = {this.handleNameChange}
            value = {this.state.generalInfoInput.name}
            type = "text"
            id="nameInput"
          />
          <label htmlFor="emailInput">Enter email </label>
          <input 
            onChange = {this.handleEmailChange}
            value = {this.state.generalInfoInput.email}
            type = "text"
            id = "emailInput"
          />
          <label htmlFor="phoneInput">Enter phone number </label>
          <input 
            onChange = {this.handlePhoneChange}
            value = {this.state.generalInfoInput.phoneNumber}
            type = "text"
            id = "phoneInput"
          />
          <button type="submit">Add Information</button>
          <button onClick={this.switchMode}>Cancel</button>
        </form>
      </div>
    );
  }
  
};

export default GeneralInfo;