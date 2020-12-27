import React, {Component} from "react";

class Experience extends Component{
  constructor() {
    super();

    // State info for experience.
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
      tasks: [],
      editMode: false,
    }
  }
  
  // Input handler functions
  handleCompanyNameChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: e.target.value,
        jobTitle: prevState.jobTitle,
        startDate: prevState.startDate,
        endDate: prevState.endDate,
        tasks: prevState.tasks,
      }
    });
  }

  handleJobTitleChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.value,
        jobTitle: e.target.jobTitle,
        startDate: prevState.startDate,
        endDate: prevState.endDate,
        tasks: prevState.tasks,
      }
    });
  }

  handleStartDateChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.value,
        jobTitle: prevState.jobTitle,
        startDate: e.target.startDate,
        endDate: prevState.endDate,
        tasks: prevState.tasks,
      }
    });
  }

  handleEndDateChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.value,
        jobTitle: prevState.jobTitle,
        startDate: prevState.startDate,
        endDate: e.target.value,
        tasks: prevState.tasks,
      }
    });
  }

  handleAddTask = (e) => {
    e.preventDefault();
    const prevState = this.state.experienceInput;
    this.setState({

    })

  }

  // Form submit function
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
    });
  }

  // Switch display or input mode.
  switchMode = (e) => {
    const prevState = this.state.editMode;
    e.preventDefault();
    this.setState({
      editMode: !prevState,
    })
  }

  // Function to remove 
  shiftSection = (e) => {
    const prevState = this.state.generalInfo;
    prevState.shift();
    e.preventDefault();
    this.setState({
      generalInfo: prevState,
    })
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