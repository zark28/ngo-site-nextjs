import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Image from "next/image";
import Navbar from "./Navbar";
import Logo from "./Logo";
import HeaderText from "./HeaderText";
const Header = ({ heroImg, heroAlt, heading, subHeading }) => {
  return (
    <Wrapper>
      <Navigation>
        <Logo />
        <Navbar />
      </Navigation>
      <ImageContainer>
        <HeaderImage
          src={heroImg}
          layout="responsive"
          alt={heroAlt}
          className=""
        />
        <HeaderImage
          src={heroImg}
          layout="responsive"
          alt={heroAlt}
          className="hidden md:block"
        />
        <HeaderImage
          src={heroImg}
          layout="responsive"
          alt={heroAlt}
          className="hidden md:block"
        />
        <HeaderText heading={heading} subHeading={subHeading} />
      </ImageContainer>
    </Wrapper>
  );
};

export default Header;
const Wrapper = tw.div` z-50 w-full flex flex-col items-center relative `;
const ImageContainer = tw.div`w-ful relative object-cover  md:grid md:grid-cols-3`;
const HeaderImage = tw.img`w-full h-auto`;
const Navigation = tw.div`z-50 w-full flex items-start absolute top-0 left-0 z-10 px-4 `;
