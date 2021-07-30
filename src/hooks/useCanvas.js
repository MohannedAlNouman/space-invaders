import {useRef, useEffect} from "react";

const useCanvas = (draw, playerX, playerY) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    const render = (time) => {
      frameCount++;
      draw(context, frameCount, playerX, playerY);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
