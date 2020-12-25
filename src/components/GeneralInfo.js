import React, {Component} from "react";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: [{
        name: "Firstname Lastname",
        email: "exampleemail@gmail.com",
        phoneNumber: "000-000-0000"
      },],
      generalInfoInput: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      editMode: false,
    }
  }
  
  handleNameChange = (e) => {
    this.setState({
      generalInfoInput: {
        name: e.target.value,
      }
    })
    console.log(e.target.value);
  }

  handleEmailChange = (e) => {
    this.setState({
      generalInfoInput: {
        email: e.target.value,
      }
    })
    console.log(e.target.value);
  }

  handlePhoneChange = (e) => {
    this.setState({
      generalInfoInput: {
        phoneNumber: e.target.value,
      }
    })
    console.log(e.target.value);
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

  render() {
    if (!this.state.editMode) {
      return ( 
        <div>
          <h1>
            General Info Section
          </h1>
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
            id="taskInput"
          />
          <label htmlFor="emailInput">Enter email </label>
          <input 
            onChange = {this.handleEmailChange}
            value = {this.state.generalInfoInput.email}
            type = "text"
            id = "emailInput"
          />
          <label htmlFor="phoneInput">Enter email </label>
          <input 
            onChange = {this.handlePhoneChange}
            value = {this.state.generalInfoInput.phoneNumber}
            type = "text"
            id = "phoneInput"
          />
          <button type="submit">Add Information</button>
        </form>
      </div>
    );
  }
  
};

export default GeneralInfo;