import React from "react";

import useCanvas from "../hooks/useCanvas.js";

const Canvas = props => {
  const {draw, ...rest} = props;

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      tabIndex="0"
      width="720"
      height="720"
      {...rest}
    ></canvas>
  );
};

export default Canvas;
