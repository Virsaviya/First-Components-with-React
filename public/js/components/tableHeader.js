import React from "react";

class TableHeader extends React.Component {
  render() {
    let headers = Object.keys(this.props.data[0]);
    headers = headers.map( (key, idx) => { 
      return <th key={idx}> {key} </th>
    })
    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;