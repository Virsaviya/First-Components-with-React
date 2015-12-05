import React from "react";
// import data from "../data";


// let headers;

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

// class TableHeaders extends React.Component{
//   render(){
//     let data = this.props.data;
//     var heads = Object.keys(data[0]);
//     var headers = ""
//     console.log(heads.length)
//     for(var i = 0; i < heads.length; i++){
//       console.log(heads[i])
//       headers = headers.concat("<th>{heads[i]}</th>");
//     }
//     return(headers)
//   }
// }

