import {useRef, useEffect} from "react";

const useCanvas = (draw, playerX, playerY) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  // const previousTimeRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 0;

    const render = time => {
      // console.log(requestRef.current);
      //each fram takes 16.66 ms or the game runs at 60 fps
      // frameCount++;
      draw(context, frameCount, playerX, playerY);
      requestRef.current = window.requestAnimationFrame(render);
    };
    requestRef.current = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
