import React, { useState } from "react";
import { Row } from "simple-flexbox";
import Player from "./components/Player";
import teams from "./assets/objects/teams";

const onPlayerClick = playerName => {
  console.log(playerName);
};

const App = () => {
  const [team, setTeam] = useState(teams);

  return (
    <div className="App">
      <h1>Basket Ball</h1>
      <h2>LA Clippers</h2>
      <div className="ARow">
        Starting Lineup
        <Row>
          {team.map((player, index) => {
            return (
              <Player
                playerPosition={player.position}
                playerName={player.name}
                playerImage={require(`./assets/images/${player.ref}.png`)}
                onPlayerClick={onPlayerClick}
                playerDesciption={player.description}
                playerHeight={player.height}
                playerAge={player.age}
              ></Player>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default App;
