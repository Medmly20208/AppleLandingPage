import React, { Fragment } from "react";
import MainItem from "./MainItem";
import cmplogo8 from "../../assets/imags/macstudio.jpg";
import cmplogo7 from "../../assets/imags/macbook.jpg";
import cmplogo3 from "../../assets/imags/px.jpg";
import cmplogo4 from "../../assets/imags/applewatch.jpg";
import classes from "./AdjacentItems.module.css";

const AdjacentItems = () => {
  return (
    <div className={classes["container"]}>
      <MainItem
        className="p1"
        title="Studio Display"
        desc="A Sight to be bold"
        available="Available Starting 3.18"
        first="Learn More"
        second="Order Now"
        imgsrc={cmplogo7}
        width="100%"
      ></MainItem>
      <MainItem
        className="p2"
        title="Mac Studio"
        desc="Empower station"
        available="Available Starting 3.18"
        first="Learn More"
        second="Order Now"
        imgsrc={cmplogo8}
        width="100%"
      ></MainItem>
      <MainItem
        title="Iphone13"
        desc="Now in green"
        available="Available Starting 3.18"
        first="Learn More"
        second="Shop"
        imgsrc={cmplogo3}
        width="100%"
      ></MainItem>
      <MainItem
        title="Watch"
        desc="It's our largest display yet"
        available="Available Starting 3.18"
        first="Learn More"
        second="Buy"
        imgsrc={cmplogo4}
        width="100%"
      ></MainItem>
    </div>
  );
};

export default AdjacentItems;
