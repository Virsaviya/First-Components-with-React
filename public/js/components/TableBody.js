import React from "react";
// import data from "../data";

// console.log('data from TableBody ', data);


class TableBody extends React.Component {
  render() {
    let keys = Object.keys(this.props.data[0]);
    let rows = this.props.data;
    rows = rows.map( (row, idx) => {
      let values = keys.map( (key, idx) => {
        return <td key={idx}> {row[key]} </td>
      });
      return <tr key={idx}> {values} </tr>
    });
    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}

export default TableBody;
