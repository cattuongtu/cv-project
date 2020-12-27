import React, {Component} from "react";
import uniqid from "uniqid";

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
      editMode: true,
    }
  }
  
  handleSchoolChange = (e) => {
    const prevState = this.state.educationInput;
    this.setState({
      educationInput: {
        school: e.target.value,
        title: prevState.title,
        startDate: prevState.startDate,
        endDate: prevState.endDate,
      }
    });
  };

  handleTitleChange = (e) => {
    const prevState = this.state.educationInput;
    this.setState({
      educationInput: {
        school: prevState.school,
        title: e.target.value,
        startDate: prevState.startDate,
        endDate: prevState.endDate,
      }
    });
  };

  handleStartDateChange = (e) => {
    const prevState = this.state.educationInput;
    this.setState({
      educationInput: {
        school: prevState.school,
        title: prevState.title,
        startDate: e.target.value,
        endDate: prevState.endDate,
      }
    });
  };

  handleEndDateChange = (e) => {
    const prevState = this.state.educationInput;
    this.setState({
      educationInput: {
        school: prevState.school,
        title: prevState.title,
        startDate: prevState.startDate,
        endDate: e.target.value,
      }
    });
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      education: this.state.education.concat(this.state.educationInput),
      educationInput: {
        school: "",
        title: "",
        startDate: "",
        endDate: ""
      },
      editMode: false,
    });
  }

  switchMode = (e) => {
    const prevState = this.state.editMode;
    e.preventDefault();
    this.setState({
      editMode: !prevState,
    })
  }

  shiftSection = (e) => {
    const prevState = this.state.education;
    prevState.shift();
    e.preventDefault();
    this.setState({
      education: prevState,
    })
  }


  render() {
    if (!this.state.editMode) {
      return ( 
        <div>
          <button onClick={this.switchMode}>Add Info</button>
          <button onClick={this.shiftSection}>Remove Oldest Section</button>
          {this.state.education.map((section) => {
            return (
              <div key={uniqid()}>
                <h4 key={uniqid()}>{section.school}</h4>
                <h4 key={uniqid()}>{section.title}</h4>
                <h4 key={uniqid()}>{section.startDate}</h4>
                <h4 key={uniqid()}>{section.endDate}</h4>
              </div>
            );
          })}
        </div>
      );
    }

    return ( 
      <div>
        <h1>
          Education
        </h1>
        <form onSubmit={this.onSubmitInfo}>
          <label htmlFor="schoolInput"> Enter school </label>
          <input
            onChange = {this.handleSchoolChange}
            value = {this.state.educationInput.school}
            type = "text"
            id="schoolInput"
          />
          <label htmlFor="titleInput"> Enter title </label>
          <input 
            onChange = {this.handleTitleChange}
            value = {this.state.educationInput.title}
            type = "text"
            id = "titleInput"
          />
          <label htmlFor="startDateInput"> Enter start date </label>
          <input 
            onChange = {this.handleStartDateChange}
            value = {this.state.educationInput.startDate}
            type = "text"
            id = "startDateInput"
          />
          <label htmlFor="endDateInput"> Enter end date </label>
          <input 
            onChange = {this.handleEndDateChange}
            value = {this.state.educationInput.endDate}
            type = "text"
            id = "startDateInput"
          />
          <button type="submit">Add Information</button>
          <button onClick={this.switchMode}>Cancel</button>
        </form>
      </div>
    );
  }
  
};


export default Education;