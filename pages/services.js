import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import NavTiles from "./components/NavTiles";
const services = () => {
  const headingStyles = "bg-primaryColor";

  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we3.jpg"
        heroAlt="cloths"
      />
      <MainHeading text="Services/Activities" clas={headingStyles} />
      <NavTiles />
      <Footer />
    </Wrapper>
  );
};

export default services;
const Wrapper = tw.div``;
