import React from "react";

//css
import styles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={styles["backdrop"]}>{props.content}</div>;
};

export default Modal;
