import React from "react";
import { ReactComponent as Logg } from "../../assets/icons/greater-than-solid.svg";
import classes from "./SpecialItem.module.css";

const SpecialItem = () => {
  return (
    <div className={classes["container"]}>
      <h1>Ipad Air</h1>
      <h2>Light.Bright.Full of might.</h2>
      <h3>Available Starting 3.18 </h3>
      <div className={classes["btn"]}>
        <div>
          <button>Learn More</button>
          <Logg className="pp" fill="#5699dd" width="10px"></Logg>
        </div>
        <div>
          <button>Order Now</button>
          <Logg fill="#5699dd" width="10px"></Logg>
        </div>
      </div>
    </div>
  );
};

export default SpecialItem;
