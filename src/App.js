import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: [{
        name: "Firstname Lastname",
        email: "exampleemail@gmail.com",
        phoneNumber: "000-000-0000"
      },],
      education: [{
        school: "San Somewhere State University",
        title: "Bachelor's of Science in Computer Science",
        startDate: "August 2018",
        endDate: "December 2021",
      },],
      experience: [{
        companyName: "Tenbo Apparel",
        jobTitle: "Software Engineer",
        startDate: "October 2019",
        endDate: "January 2020",
        tasks:[],
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>CV Application</h1>
      </div>
    )
  }
}

export default App;