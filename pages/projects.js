import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import BlogItems from "./components/BlogItems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
const projects = () => {
  const headingStyles = "bg-primaryColor";

  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we1.jpg"
        heroAlt="woman with young baby at the farm"
      />
      <MainHeading text="Recent News & Events" clas={headingStyles} />

      <BlogItems />
      <Footer />
    </Wrapper>
  );
};

export default projects;
const Wrapper = tw.div``;
