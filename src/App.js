import React from "react";
import "./App.css";
import ivica from "./72148.png";
import { Column, Row } from "simple-flexbox";

function App() {
  return (
    <div className="App">
      <h1>Basket Ball</h1>
      <h2>LA Clippers</h2>
      <div>
        Starting Lineup
        <Row>
          <Column>
            <div>Center</div>
            <div className="name">Ivica Zubac</div>
            <img src={ivica} alt="Logo" />
          </Column>
          <Column>Point Guard</Column>
          <Column>Shooting Guard</Column>
          <Column>Power Forward</Column>
          <Column>Small forward</Column>
        </Row>
      </div>
    </div>
  );
}

export default App;
