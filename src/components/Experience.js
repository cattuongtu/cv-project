import React, {Component} from "react";
import uniqid from "uniqid";

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
        tasks: ["Designed and implemented company website", "Managed store database", "Developed inventory software"],
      },],
      experienceInput: {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        tasks: [],
      },
      task: "",
      editMode: true,
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
        tasks: prevState.tasks
      }
    });
  }

  handleJobTitleChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.companyName,
        jobTitle: e.target.value,
        startDate: prevState.startDate,
        endDate: prevState.endDate,
        tasks: prevState.tasks
      }
    });
  }

  handleStartDateChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.companyName,
        jobTitle: prevState.jobTitle,
        startDate: e.target.value,
        endDate: prevState.endDate,
        tasks: prevState.tasks
      }
    });
  }

  handleEndDateChange = (e) => {
    const prevState = this.state.experienceInput;
    this.setState({
      experienceInput: {
        companyName: prevState.companyName,
        jobTitle: prevState.jobTitle,
        startDate: prevState.startDate,
        endDate: e.target.value,
        tasks: prevState.tasks
      }
    });
  }

  handleTaskChange = (e) => {
    this.setState({
      task: e.target.value,
    });
    console.log(e.target.value);
  }

  addTask = (e) => {
    e.preventDefault();
    const prevState = this.state.experienceInput;
    this.setState({
        experienceInput: {
          companyName: prevState.companyName,
          jobTitle: prevState.jobTitle,
          startDate: prevState.startDate,
          endDate: prevState.endDate,
          tasks: prevState.tasks.concat(this.state.task),
        },
        task: "" 
    });
  }

  // Form submit function
  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience.concat(this.state.experienceInput),
      experienceInput: {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
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
    const prevState = this.state.experience;
    prevState.shift();
    e.preventDefault();
    this.setState({
      experience: prevState,
    })
  }

  render() {
    if (!this.state.editMode) {
      return ( 
        <div>
          <button onClick={this.switchMode}>Add Info</button>
          <button onClick={this.shiftSection}>Remove Oldest Section</button>
          {this.state.experience.map((section) => {
            console.log(section);
            return (
              <div key={uniqid()}>
                <h4 key={uniqid()}>{section.companyName}</h4>
                <h4 key={uniqid()}>{section.jobTitle}</h4>
                <h4 key={uniqid()}>{section.startDate}</h4>
                <h4 key={uniqid()}>{section.endDate}</h4>
                <ul>
                  {section.tasks.map((task) => {
                    return <li key={uniqid()}>{task}</li>
                  })}
                </ul>
              </div>
              
            );
          })}
        </div>
      );
    }

    return ( 
      <div>
        <h1>
          Experience
        </h1>
        <form onSubmit={this.onSubmitInfo}>
          <label htmlFor="companyNameInput"> Enter company name </label>
          <input
            onChange = {this.handleCompanyNameChange}
            value = {this.state.experienceInput.companyName}
            type = "text"
            id="companyNameInput"
          />
          <label htmlFor="jobTitleInput"> Enter job title </label>
          <input 
            onChange = {this.handleJobTitleChange}
            value = {this.state.experienceInput.jobTitle}
            type = "text"
            id = "jobTitleInput"
          />
          <label htmlFor="startDateInput"> Enter start date </label>
          <input 
            onChange = {this.handleStartDateChange}
            value = {this.state.experienceInput.startDate}
            type = "text"
            id = "startDateInput"
          />
          <label htmlFor="endDateInput"> Enter end date </label>
          <input 
            onChange = {this.handleEndDateChange}
            value = {this.state.experienceInput.endDate}
            type = "text"
            id = "endDateInput"
          />
          <label htmlFor="taskInput"> Enter task </label>
          <input
            onChange = {this.handleTaskChange}
            type= "text"
            id= "taskInput"
          />
          <button onClick={this.addTask}>Add Task</button>
          <button type="submit">Add Information</button>
          <button onClick={this.switchMode}>Cancel</button>
        </form>
      </div>
    );
  }
  
};

export default Experience;