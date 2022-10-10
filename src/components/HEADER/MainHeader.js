import React from "react";
import HeaderItem from "./HeaderItem";
import { ReactComponent as Logo } from "../../assets/icons/apple-brands.svg";
import { ReactComponent as LogoBag } from "../../assets/icons/bag-shopping-solid.svg";
import { ReactComponent as LogoSearch } from "../../assets/icons/magnifying-glass-solid.svg";
import styles from "./MainHeader.module.css";

import ResponsiveHeader from "./ResponsiveHeader";

const MainHeader = () => {
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

  return (
    <header className={styles["container"]}>
      <Logo
        className={styles["logo"]}
        fill="#d6d6d6"
        stroke="#d6d6d6"
        width="20px"
      ></Logo>
      <nav>
        <ul className={styles["list"]}>
          {list.map((ele) => (
            <HeaderItem title={ele}></HeaderItem>
          ))}
        </ul>
      </nav>
      <LogoSearch
        className={styles["logo"]}
        fill="#d6d6d6"
        stroke="#d6d6d6"
        width="20px"
      ></LogoSearch>
      <LogoBag
        className={styles["logo"]}
        fill="#d6d6d6"
        stroke="white"
        width="20px"
      ></LogoBag>
    </header>
  );
};

export default MainHeader;
