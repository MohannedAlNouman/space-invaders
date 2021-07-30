import React from "react";
import {useSelector} from "react-redux";

import {selectX, selectY} from "../reducers/ship.js";
import Canvas from "./Canvas.js";
import useControls from "../hooks/useControls.js";

const Game = props => {
  const playerX = useSelector(state => {
    return selectX(state);
  });

  const playerY = useSelector(state => {
    return selectY(state);
  });

  useControls();

  return <Canvas {...props} playerX={playerX} playerY={playerY} />;
};

export default Game;
