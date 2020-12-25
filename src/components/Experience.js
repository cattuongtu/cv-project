import React, {Component} from "react";

class Experience extends Component{
  constructor() {
    super();

    this.state = {
      experience: [{
        companyName: "Tenbo Apparel",
        jobTitle: "Software Engineer",
        startDate: "October 2019",
        endDate: "January 2020",
        tasks:["Created clothing website", "Maintained website database", 
        "Communicated with clients with regards to technical questions"],
      }],
      experienceInput: {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        tasks:[],
      },
    }
  }
  
  render() {
    return ( 
      <div>
        <h1>
          Experience Section
        </h1>
      </div>
    );
  }
  
};

export default Experience;