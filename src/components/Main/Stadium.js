import React from "react";
import classes from "./Stadium.module.css";
import { ReactComponent as Logg } from "../../assets/icons/greater-than-solid.svg";

const Stadium = () => {
  return (
    <div className={classes["container"]}>
      <div>
        <h1>TV+</h1>
        <h1>Friday Night</h1>
        <h1>Baseball</h1>
      </div>
      <div>
        <h2>Live MLB Friday Nigth Baseball</h2>
        <h2>Streaming soon ,on Apple TV+</h2>
      </div>
      <div className={classes["btn"]}>
        <div>
          <button>Learn More</button>
          <Logg className="pp" fill="#5699dd" width="10px"></Logg>
        </div>
      </div>
    </div>
  );
};

export default Stadium;
