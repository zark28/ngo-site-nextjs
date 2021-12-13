import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const HeaderText = ({ heading, subHeading }) => {
  return (
    <Wrapper>
      <h1 className="text-6xl w-full font-bold text-left">{heading}</h1>
      <p className="text-2xl font-bold w-full mt-4">{subHeading}</p>
    </Wrapper>
  );
};

export default HeaderText;
const Wrapper = tw.div`w-full bg-secondaryColor-light lg:w-3/5 px-4 flex flex-col items-center md:absolute z-10 md:insert-x-1 md:bottom-1/4
`;
