import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// headers = headers.map( key => { 
//   return <th> {key} </th>
// })

// let headers = Object.keys(data[0][0])
// console.log('table keys from TableHeader ', headers);

class Table extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-hover">
            <TableHeader data={this.props.data}/>
            <TableBody data={this.props.data} />
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // console.log('table props ', this.props.data)
  }
}

export default Table;
