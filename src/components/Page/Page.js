import React from "react";
import MainHeader from "../HEADER";
import MainPage from "../Main/MainPage";
import Footer from "../Footer/Footer";

const Page = () => {
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <MainPage></MainPage>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Page;
