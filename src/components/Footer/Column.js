import React from "react";
import Element from "./Element";
import classes from "./Column.module.css";

const Column = (props) => {
  return (
    <div className={classes["container"]}>
      <h3>{props.title}</h3>
      <Element content={props.content}></Element>
    </div>
  );
};

export default Column;
