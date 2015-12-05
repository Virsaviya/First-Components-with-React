import React from "react";
import data from "../data";
import Table from "./table";


let tables = data
tables = tables.map( (table, idx) => { 
  return (
    <div>
      <h3>Table {idx + 1}</h3>
      <Table key={idx} data={table}/>
    </div>
  )
})

class App extends React.Component {
  render() {
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