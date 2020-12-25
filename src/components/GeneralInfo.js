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
    }
  }
  
  render() {
    return ( 
      <div>
        <h1>
          General Info Section
        </h1>
      </div>
    );
  }
  
};

export default GeneralInfo;