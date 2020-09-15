import React, { Component } from "react";

export default function Box(props) {
  let { item } = props;
  return <div className="box-style">Box {item}</div>;
}

// export default class Box extends Component {

//   render() {
//     return (
//       <div className="box-style">
//         Box {this.props.num}
//         <h3>{this.props.value}</h3>
//       </div>
//     );
//   }
// }
