import React from "react";

import Canvas from "./components/Canvas.js";
import {drawShip} from "./draw.js";

const App = () => {
  return (
    <div>
      <Canvas draw={drawShip} />
    </div>
  );
};

export default App;
