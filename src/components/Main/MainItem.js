import React from "react";
import classes from "./MainItem.module.css";
import { ReactComponent as Logg } from "../../assets/icons/greater-than-solid.svg";
const MainItem = (props) => {
  return (
    <section className={classes["container"]} style={{ width: props.width }}>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
      <p>{props.available}</p>
      <div className={classes["btn"]}>
        <div>
          <button>{props.first}</button>
          <Logg className="pp" fill="#5699dd" width="10px"></Logg>
        </div>
        <div>
          <button>{props.second}</button>
          <Logg fill="#5699dd" width="10px"></Logg>
        </div>
      </div>

      <img
        src={props.imgsrc}
        alt="img"
        width={props.width}
        height="500px"
      ></img>
    </section>
  );
};

export default MainItem;
