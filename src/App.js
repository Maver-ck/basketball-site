import React, { useState } from "react";
import { Row } from "simple-flexbox";
import Player from "./components/Player";
import teams from "./assets/objects/teams";

const App = () => {
  const [team, setTeam] = useState(teams);

  return (
    <div className="App">
      <h1>Basket Ball</h1>
      <h2>LA Clippers</h2>
      <div>
        Starting Lineup
        <Row className="row">
          {team.map((player, index) => {
            return (
              <Player
                key={index}
                playerPosition={player.position}
                playerName={player.name}
                playerImage={require(`./assets/images/${player.ref}.png`)}
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
