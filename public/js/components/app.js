import React from "react";
import data from "../data";
import Table from "./table";


let tables = data

class App extends React.Component {
  render() {
    tables = tables.map( (table, idx) => { 
      return (
        <div key={idx}>
          <h3>Table {idx + 1}</h3>
          <Table data={table}/>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-md-12">
        <h2>Dynamically Building Tables with React.js</h2>
        {tables}
        </div>
      </div>
    );
  }
}
export default App;