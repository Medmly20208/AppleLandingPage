import React from "react";
import Column from "./Column";
import classes from "./Footer.module.css";

const Footer = () => {
  const j = [
    [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "iPod touch",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
    [
      "Apple Music",
      "Apple TV+",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      " App Store",
    ],
    ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
      "Financing",
      "Apple Trade In",
      "Order Status",
      "Shopping Help",
    ],
    ["Apple and Business", "Shop for Business"],
    ["Apple and Education", "Shop for K-12", "Shop for College"],
    [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
    ["Shop for Government", "Shop for Veterans and Military"],
    [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
    [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  ];
  return (
    <div className={classes["container"]}>
      <Column title="Shop and learn" content={j[0]}></Column>
      <div>
        <Column title="Services" content={j[1]}></Column>
        <Column title="Accounts" content={j[2]}></Column>
      </div>

      <Column title="Apple Store" content={j[3]}></Column>
      <div>
        <Column title="For Business" content={j[4]}></Column>
        <Column title="For Education" content={j[5]}></Column>
        <Column title="For HealthCare" content={j[6]}></Column>
        <Column title="For Governement" content={j[7]}></Column>
      </div>
      <Column title="Apple Values" content={j[8]}></Column>
      <Column title="About Apple" content={j[9]}></Column>
    </div>
  );
};

export default Footer;
