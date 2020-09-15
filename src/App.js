import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import ChoiceCard from "./components/ChoiceCard";
import { CHOICES, getRandomChoice, getRoundOutcome } from "./utils/index";
import ChoiceButtons from "./components/ChoiceButtons";

function App() {
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoose = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    // console.log("result: ", result);
    // console.log("compChoice", compChoice);

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

    setGamePrompt(result);

    gameHistory.push(result);
    console.log(gameHistory);

    setGameHistory([...gameHistory]);
  };

  return (
    <>
      {/* <Box item={item} />
      <Box item={item} />
      <Box item={item} /> */}

      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />

            <div className="prompt">
              <div className="container">
                <h1>{prompt}</h1>
                <ChoiceButtons onPlayerChoose={onPlayerChoose} />
              </div>
            </div>

            <ChoiceCard
              title="Computer"
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />
          </div>
          <div className="col-md-4 themed-grid-col mt-5">
            <h3 className="text-center pl-5">History</h3>
            <ul>
              {gameHistory.map((result) => {
                return <li className="text-center">{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
