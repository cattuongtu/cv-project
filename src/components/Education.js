import React, {Component} from "react";

class Education extends Component{
  constructor() {
    super();

    this.state = {
      education: [{
        school: "San Somewhere State University",
        title: "Bachelor's of Science in Computer Science",
        startDate: "August 2018",
        endDate: "December 2021",
      },],
      educationInput: {
        school: "",
        title: "",
        startDate: "",
        endDate: "",
      },
    }
  }
  
  render() {
    return ( 
      <div>
        <h1>
          Education Section
        </h1>
      </div>
    );
  }
  
};


export default Education;