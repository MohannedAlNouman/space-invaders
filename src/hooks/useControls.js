import {useEffect, useState} from "react";

const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Spacebar", " "];

const useControls = () => {
  const [pressed, setPressed] = useState([]);

  useEffect(() => {

    const handleKeyDown = e => {
      const {key} = e;
      if (allowedKeys.includes(key) && !pressed.includes(key)) {
        setPressed(prev => [...prev, key]);
      }
    };

    const handleKeyUp = e => {
      const {key} = e;
      setPressed(pressed.filter(k => k !== key));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressed]);
};

export default useControls;
