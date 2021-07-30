import React from "react";

import useCanvas from "../hooks/useCanvas.js";

const Canvas = props => {
  const {draw, playerX, playerY, ...other} = props;

  const canvasRef = useCanvas(draw, playerX, playerY);

  return (
    <canvas
      ref={canvasRef}
      tabIndex="0"
      width="720"
      height="720"
      {...other}
    ></canvas>
  );
};

export default Canvas;
