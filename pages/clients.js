import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import Sponsors from "./components/Sponsors";
const clients = () => {
  const headingStyles = "bg-primaryColor";

  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we2.jpg"
        heroAlt="helping hands"
      />
      <MainHeading text="Our Partners" clas={headingStyles} />
      <Sponsors />
      <Footer />
    </Wrapper>
  );
};

export default clients;
const Wrapper = tw.div``;
