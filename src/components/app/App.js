import React, { useState } from "react";
import "./App.css";
import { Row } from "simple-flexbox";
import { PlayerCardColumn } from "./PlayerCardColumn";
import ivicaInfo from "../../assets/objects/clippers/ivica";
import team from "../../assets/objects/";

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
          {team.map(player => {
            const playerImage = require(`../../assets/images/${player.ref}.png`);
            return (
              <PlayerCardColumn
                playerPosition={player.position}
                playerName={player.name}
                playerImage={playerImage}
                onPlayerClick={onPlayerClick}
                playerDesciption={player.description}
              ></PlayerCardColumn>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;
