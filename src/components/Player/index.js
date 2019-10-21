import React, { useState } from "react";
import { Column } from "simple-flexbox";

const Player = props => {
  const [playerExpanded, setPlayerExpanded] = useState(false);
  return (
    <Column
      className="player"
      onClick={() => setPlayerExpanded(!playerExpanded)}
    >
      <div>{props.playerPosition}</div>
      <div>{props.playerName}</div>
      <img style={{ alignSelf: "center" }} src={props.playerImage} alt="Logo" />
      <div style={{ display: playerExpanded ? "block" : "none" }}>
        <div>Age: {props.playerAge}</div>
        <div>Height: {props.playerHeight}</div>
        <div>
          <p>{props.playerDesciption}</p>
        </div>
      </div>
    </Column>
  );
};

export default Player;
