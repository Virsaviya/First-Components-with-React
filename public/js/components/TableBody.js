import React from "react";
import data from "../data";

console.log('data from TableBody ', data);


class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>val 1</td>
          <td>val 2</td>
          <td>val 3</td>
        </tr>
        <tr>
          <td>updated val 1</td>
          <td>updated val 2</td>
          <td>updated val 3</td>
        </tr>
        <tr>
          <td>val 1</td>
          <td>val 2</td>
          <td>val 3</td>
        </tr>
      </tbody>
    );
  }
  componentDidMount() {
    console.log('body props ', this.props)
  }
}

export default TableBody;
