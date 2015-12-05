import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";



// let headers = Object.keys(data[0][0])
// console.log('table keys from TableHeader ', headers);

class Table extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Taaaaable</h3>
            <table className="table table-striped table-hover">
              <TableHeader />
              <TableBody />
            </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log('table props ', this.props)
  }
}

export default Table;
