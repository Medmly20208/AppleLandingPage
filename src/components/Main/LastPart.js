import React from "react";
import MainItem from "./MainItem";
import Stadium from "./Stadium";
import cmplogo2 from "../../assets/imags/applecard.jpg";
import classes from "./LastPart.module.css";

const LastPart = () => {
  return (
    <div className={classes["container"]}>
      <MainItem
        title="Card"
        desc="Get up to 3% Daily Cash Back with every purchase"
        first="Learn More"
        second="Apply Now"
        imgsrc={cmplogo2}
        width="70%"
      ></MainItem>
      <Stadium></Stadium>
    </div>
  );
};

export default LastPart;
