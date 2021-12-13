import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import AboutItems from "./components/AboutItems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import ProjectItems from "./components/projectItems";
import Sponsors from "./components/Sponsors";
const about = () => {
  const headingStyles = "bg-primaryColor";

  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we6.jpg"
        heroAlt="women at the market"
      />
      <MainHeading text="Where we are" clas={headingStyles} />
      <ProjectItems />
      <MainHeading text="Our Mission" clas={headingStyles} />
      <AboutItems />
      <MainHeading text="Sponsors/Collaberators" clas={headingStyles} />

      <Sponsors />
      <Footer />
    </Wrapper>
  );
};

export default about;

const Wrapper = tw.div``;
