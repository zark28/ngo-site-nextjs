import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const MainHeading = ({ text, clas }) => {
  return (
    <Wrapper>
      <h2 className={`max-w-max px-2 text-2xl font-bold ${clas}`}>{text}</h2>
    </Wrapper>
  );
};

export default MainHeading;
const Wrapper = tw.div` mt-40 mb-10 w-full`;
