import React, { useState } from "react";

//assets
import { ReactComponent as Logo } from "../../assets/icons/apple-brands.svg";
import { ReactComponent as LogoBag } from "../../assets/icons/bag-shopping-solid.svg";

//css
import styles from "./ResponsiveHeader.module.css";

//iconify
import { Icon } from "@iconify/react";

//components
import Modal from "./Modal";
import ModalContent from "./ModalContent";

const ResponsiveHeader = () => {
  const [dislayModal, setDisplayModal] = useState(false);

  const list = [
    "Store",
    "Mac",
    "ipad",
    " iphone",
    " Watch",
    " AirPods",
    "TV & Home",
    "Only on Apple",
    " Accessories ",
    "Support",
  ];

  const OpenModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      {dislayModal && (
        <Modal content={<ModalContent navList={list} onClose={closeModal} />} />
      )}
      <header className={styles["container"]}>
        <Icon
          icon={"fontisto:nav-icon-a"}
          className={styles["icon"]}
          onClick={OpenModal}
        />
        <Logo
          className={styles["logo"]}
          fill="#d6d6d6"
          stroke="#d6d6d6"
          width="20px"
        ></Logo>
        <LogoBag
          className={styles["logo"]}
          fill="#d6d6d6"
          stroke="white"
          width="20px"
        ></LogoBag>
      </header>
    </>
  );
};

export default ResponsiveHeader;
