import React, { useState } from "react";
import { Column } from "simple-flexbox";

export const PlayerCardColumn = props => {
  const [playerExpanded, setPlayerExpanded] = useState(false);
  return (
    <Column>
      <div>{props.playerPosition}</div>
      <div>{props.playerName}</div>
      <img
        style={{ alignSelf: "center" }}
        src={props.playerImage}
        alt="Logo"
        onClick={() => props.onClick(props.playerName)}
      />
      <div style={{ display: playerExpanded ? "block" : "none" }}>
        {props.playerDesciption}
      </div>
      <button onClick={() => setPlayerExpanded(!playerExpanded)}>Expand</button>
    </Column>
  );
};
