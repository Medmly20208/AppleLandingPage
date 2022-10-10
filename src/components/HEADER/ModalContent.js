import React from "react";

//assets
import { ReactComponent as Logo } from "../../assets/icons/apple-brands.svg";

//css
import styles from "./ModalContent.module.css";

//iconify
import { Icon } from "@iconify/react";

const ModalContent = (props) => {
  return (
    <div className={styles["Container"]}>
      <div className={styles["header"]}>
        <Icon icon={"akar-icons:cross"} onClick={props.onClose} />
        <Logo
          fill="#d6d6d6"
          stroke="#d6d6d6"
          width="20px"
          className={styles["logo"]}
        ></Logo>
        <div />
      </div>
      <div className={styles["supercontainer"]}>
        <div className={styles["inputcontainer"]}>
          <Icon icon={"ant-design:search-outlined"} />

          <input type={"text"} placeholder={"Search apple.com"} />
        </div>
      </div>
      <div>
        <ul className={styles["listcontainerstyle"]}>
          {props.navList.map((NavItem) => {
            return <li>{NavItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ModalContent;
