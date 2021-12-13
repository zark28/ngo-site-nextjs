import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
const Logo = ({ direction, logoImg, logoTitle }) => {
  return (
    <Link href="/" passHref>
      <Wrapper className={`${direction}`}>
        <LogoImage className={logoImg} src="./vercel.svg" />
        <LogoTitle className={logoTitle}>women empowerment</LogoTitle>
      </Wrapper>
    </Link>
  );
};

export default Logo;

const Wrapper = tw.div`
flex h-20 z-8 flex-2 items-center justify-center cursor-pointer my-5 flex-col`;
const LogoImage = tw.img`h-full  object-contain`;
const LogoTitle = tw.div`bold text-yellow text-2xl md:text-lg xl:text-xl`;
