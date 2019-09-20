import React from "react";
import "./App.css";
import ivica from "./72148.png";
import montrezl from "./montrezl.png";
import kawhi from "./kawhi.png";
import pg from "./pg.png";
import bev from "./bev.png";
import { Column, Row } from "simple-flexbox";

const PlayerCardColumn = props => (
  <Column>
    <div>{props.playerPosition}</div>
    <div>{props.playerName}</div>
    <img
      style={{ alignSelf: "center" }}
      src={props.playerImage}
      alt="Logo"
      onClick={() => props.onClick(props.playerName)}
    />
  </Column>
);

const onPlayerClick = playerName => {
  console.log(playerName);
};

function App() {
  return (
    <div className="App">
      <h1>Basket Ball</h1>
      <h2>LA Clippers</h2>
      <div>
        Starting Lineup
        <Row style={{ justifyContent: "center" }}>
          <PlayerCardColumn
            playerPosition="Center"
            playerName="Ivica Zubac"
            playerImage={ivica}
            onClick={onPlayerClick}
          ></PlayerCardColumn>
          <PlayerCardColumn
            playerPosition="Point Guard"
            playerName="Patrick Beverley"
            playerImage={bev}
            onClick={onPlayerClick}
          ></PlayerCardColumn>
          <PlayerCardColumn
            playerPosition="Shooting Guard"
            playerName="Paul George"
            playerImage={pg}
            onClick={onPlayerClick}
          ></PlayerCardColumn>
          <PlayerCardColumn
            playerPosition="Power Forward"
            playerName="Montrezl Harrell"
            playerImage={montrezl}
            onClick={onPlayerClick}
          ></PlayerCardColumn>
          <PlayerCardColumn
            playerPosition="Small Forward"
            playerName="Kawhi Leonard"
            playerImage={kawhi}
            onClick={onPlayerClick}
          ></PlayerCardColumn>
        </Row>
      </div>
    </div>
  );
}

export default App;
