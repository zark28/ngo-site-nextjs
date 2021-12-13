import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const Sponsors = () => {
  return (
    <Wrapper>
      <SponsorsList>
        <Sponsor src="./vercel.svg" />
        <Sponsor src="./vercel.svg" />
        <Sponsor src="./vercel.svg" />
        <Sponsor src="./vercel.svg" />
        <Sponsor src="./vercel.svg" />
      </SponsorsList>
    </Wrapper>
  );
};

export default Sponsors;
const Wrapper = tw.div`w-full flex flex-col items-center justify-center `;
const SponsorsList = tw.div` w-full grid grid-cols-2 gap-10 md:flex md:flex-wrap`;
const Sponsor = tw.img`h-full w-auto`;
