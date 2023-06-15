import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={classes.btn}>
      <p>{counter}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
};
