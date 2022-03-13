import React from "react";
import styles from "./HeaderItem.module.css";

const HeaderItem = (props) => {
  return <li className={styles["log"]}>{props.title}</li>;
};

export default HeaderItem;
