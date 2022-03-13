import React from "react";
import classes from "./Element.module.css";

const Element = (props) => {
  return (
    <ul className={classes["container"]}>
      {props.content.map((ele) => (
        <li>{ele}</li>
      ))}
    </ul>
  );
};

export default Element;
