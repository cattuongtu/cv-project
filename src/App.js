import React, {Component} from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
   
    return (
      <div>
        <h1>CV Application</h1>
        <GeneralInfo/>
        <Education/>
        <Experience/>
      </div>
    )
  }
}

export default App;