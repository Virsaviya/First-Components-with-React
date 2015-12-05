import React from "react";
import data from "../data";


let headers = Object.keys(data[0][0])
console.log('table keys from TableHeader ', headers);

headers = headers.map( key => { 
  return <th> {key} </th>
})

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    );
  }
  
  componentDidMount() {
    console.log('header props ', this.props)
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

