import React, { Component } from "react";

const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

// export default function ChoiceCard(props) {
//     // let {num, value} = props;
//     console.log(props);
//   return (

//         <div  className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
//             <h1>{props.title}</h1>
//             <img src={props.imgURL} alt={props.title}/>
//             <h3>{props.winner ? 'Won' : 'Loss'}</h3>
//         </div>
//   );
// }

export default function ChoiceCard(props) {
  const won = props.title === props.previousWinner;
  let className;
  const hasPreviousGame =
    props.previousWinner === "Computer" || props.previousWinner === "You";
  if (hasPreviousGame) {
    className = won ? "winner" : "loser";
  }

  let prompt;
  if (won) {
    prompt = "Won";
    className = won ? "winner" : "loser";
  } else if (props.previousWinner === "Tie") {
    prompt = "Tie";
  } else if (props.previousWinner === null) {
    prompt = "Start";
  } else {
    prompt = "Lose";
  }

  return (
    <div className={`choice-card ${className}`}>
      <h1>{props.title}</h1>
      <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
      <h3>{prompt}</h3>
    </div>
  );
}

// export default class ChoiceCard extends Component {
//   render() {
//     return (
//       <div className={`choice-card ${this.props.winner ? 'winner' : 'loser'}`}>
//         <h1>{this.props.title}</h1>
//         <img src={this.props.imgURL} alt={this.props.title}/>
//          <h3>{this.props.winner ? 'Won' : 'Loss'}</h3>
//       </div>
//     );
//   }
// }
