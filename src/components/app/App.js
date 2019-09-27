import React, { useState } from "react";
import "./App.css";
import ivica from "../../assets/images/ivica.png";
import montrezl from "../../assets/images/montrezl.png";
import kawhi from "../../assets/images/kawhi.png";
import pg from "../../assets/images/pg.png";
import bev from "../../assets/images/bev.png";
import { Row } from "simple-flexbox";
import { PlayerCardColumn } from "./PlayerCardColumn";
import ivicaInfo from "../../assets/objects/clippers/ivica";

const onPlayerClick = playerName => {
  console.log(playerName);
};

function App() {
  const [playerInfo, setPlayerInfo] = useState(ivicaInfo);
  console.log(playerInfo);
  return (
    <div className="App">
      <h1>Basket Ball</h1>
      <h2>LA Clippers</h2>
      <div>
        Starting Lineup
        <Row style={{ justifyContent: "center" }}>
          <PlayerCardColumn
            playerPosition="Center"
            playerName={playerInfo.name}
            playerImage={ivica}
            onClick={onPlayerClick}
            playerDesciption={playerInfo.description}
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
