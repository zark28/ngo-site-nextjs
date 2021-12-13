import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import BlogItems from "./components/BlogItems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
const blogs = () => {
  const headingStyles = "bg-primaryColor";

  return (
    <Wrapper>
      <Header
        heading="Raise you helping hand for Deprived Women"
        subHeading="fkyfy,v,yf v f yf fdy iyfbfku fy lfyi"
        heroImg="./img/we1.jpg"
        heroAlt="woman with young baby at the farm"
      />
      <MainHeading text="Blog" clas={headingStyles} />
      <BlogItems />
      <Footer />
    </Wrapper>
  );
};

export default blogs;
const Wrapper = tw.div``;
