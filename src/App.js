import React from "react";

import Game from "./components/Game.js";
import {drawShip} from "./draw.js";

const App = () => {
  return (
    <div>
      <Game draw={drawShip} />
    </div>
  );
};

export default App;
