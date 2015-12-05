import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

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
}

export default Table;
