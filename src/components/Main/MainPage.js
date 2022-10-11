import React from "react";
import MainItem from "./MainItem";
import AdjacentItems from "./AdjacentItems";
import cmplogo1 from "../../assets/imags/appleblackiphone.jpg";

import cmplogo6 from "../../assets/imags/iphone13.jpg";
import classes from "./MainPage.module.css";
import SpecialItem from "./SpecialItem";
import LastPart from "./LastPart";

const MainPage = () => {
  return (
    <main className={classes["container"]}>
      <MainItem
        title="iphone 13 pro"
        desc="Now in Alpine Green"
        available="Available Starting 3.18"
        first="Learn More"
        second="shop"
        imgsrc={cmplogo6}
        width="70%"
      ></MainItem>
      <MainItem
        title="the new Iphone se"
        desc="Love the power Love the price"
        available="Available Starting 3.18"
        first="Learn More"
        second="Pre-order"
        imgsrc={cmplogo1}
        width="70%"
      ></MainItem>
      <SpecialItem></SpecialItem>
      <AdjacentItems></AdjacentItems>
      <LastPart></LastPart>
    </main>
  );
};

export default MainPage;
