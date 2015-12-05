import React from "react";
import data from "../data";
import Table from "./table";


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.props.data = data;
// console.log('data from your apppp ', this.props.data);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <h2>Dynamically Building Tables with React.js</h2>
        <Table data={data} />
        </div>
      </div>
    );
  }
}


class Timer extends React.Component {
  render() {
    return (
      <div>{this.state.remainingSeconds}</div>
    );
  }
}


export default App;